import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import imgUrl from "../helpers/imgUrl";
import useAxios from "../hooks/useAxios";
import { IoImageOutline, IoAttachOutline, IoSendSharp } from "react-icons/io5";
import clsx from "clsx";
import { useAuth } from "../contexts/AuthContext";
import DateFormatter from "../componentes/DateFormatter";


const ChatsDetails = () => {

    const { id } = useParams();

    const { user } = useAuth();

    const [message, setMessage] = useState('');

    const [attachments, setAttachments] = useState([]);

    const [pages, setPages] = useState('');

    const [filters, setFilters] = useState({
        page: 1,
        orderBy: 'createdAt,DESC'
    });

    const [currentMessages, setCurrentMessages] = useState([]);

    const [{ data: newMessage, loading: newMessageLoading }, sendMessage] = useAxios({ url: `/chats/${id}/messages`, method: 'POST' }, { manual: true, useCache: false });

    const [{ data, loading, error }, getChat] = useAxios({ url: `/chats/${id}` }, { useCache: false });

    const [{ data: chatMessages, loading: chatMessagesLoading }, getChatMessages] = useAxios({ url: `/chats/${id}/messages`, params: { ...filters } }, { useCache: false });

    useEffect(() => {
        if (chatMessages?.results?.length > 0) {
            setCurrentMessages((oldCurrentMessages) => {
                return [...oldCurrentMessages, ...chatMessages?.results]
            })
        }

        if (chatMessages) {
            setPages(chatMessages?.numberOfPages);
        }
    }, [chatMessages]);

    useEffect(() => {
        if (newMessage) {
            setCurrentMessages((oldMessages) => {
                return [newMessage, ...oldMessages]
            });
            setAttachments([]);
            setMessage('');
        }
    }, [newMessage]);

    const handleSubmit = (e) => {
        e?.preventDefault?.();
        if (newMessageLoading || !message) {
            return;
        }

        const data = new FormData();

        data.append('content', message);

        attachments.forEach((attachment, i) => {
            data.append(`attachments`, attachment, attachment.name);
        });

        sendMessage({ data });
    }

    const handleMore = () => {
        if (pages > filters?.page) {
            setFilters((oldFilters) => {
                return {
                    ...oldFilters,
                    page: oldFilters?.page + 1
                }
            });
        }
    }

    const handleAttachments = (e) => {
        setAttachments((oldAttachments) => {
            return [...oldAttachments, ...e.target.files];
        });
    }

    const removeFromArray = (index) => {
        attachments?.splice(index, 1);

        setAttachments((olddata) => {
            return [...attachments];
        });
    }

    return (
        <div className="container p-4 h-full w-full mb-20">
            <div className="flex items-center justify-between border-b pb-2">
                <Link to={`/sellers/${data?.seller?.slug}/recipes`} className="flex items-center space-x-4">
                    <img className="h-20 w-20 rounded-full" src={imgUrl(data?.seller?.logo)} alt="" />
                    <p>
                        {data?.seller?.name}
                    </p>
                </Link>
                <Link className="bg-main px-4 py-2 rounded-full text-white hover:shadow-xl" to={'/chats'}>
                    Back
                </Link>
            </div>
            <div className="px-8" style={{ height: '65vh', overflowY: 'auto', flexDirection: 'column-reverse', display: 'flex', width: '100%' }}>
                {
                    currentMessages?.map?.((message, i) => {
                        return (
                            <div key={i} className={clsx(["flex my-2 w-full"], {
                                "justify-end": user?.id === message?.userId
                            })}>
                                <div className={clsx(["shadow py-2 px-8 rounded-xl text-sm md:text-md"], {
                                    "bg-white": user?.id !== message?.userId,
                                    "bg-main text-white text-right": user?.id == message?.userId
                                })}>
                                    {
                                        message?.attachments?.length > 0 &&
                                        <div>
                                            {
                                                message?.attachments?.map((attachment, i2) => {
                                                    return (
                                                        <a href={imgUrl(attachment.path)} download target="_blank" className="mb-1 p-2 rounded-xl block" style={{ backgroundColor: `rgba(255,255,255, .3)` }}>
                                                            {attachment.name}
                                                        </a>
                                                    )
                                                })
                                            }
                                        </div>
                                    }
                                    <b>{message?.content}</b>
                                    <p>
                                        <small><DateFormatter value={message?.createdAt} dateFormat={'dd-MM-yyyy hh:mm:ss'} /></small>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    chatMessagesLoading ?
                        <div className="text-center my-4">
                            Loading more messages...
                        </div>
                        :
                        pages > filters?.page ?
                            <div className="text-center">
                                <button onClick={handleMore} className="bg-white px-8 py-2 rounded-full shadow mt-4">
                                    Load More
                                </button>
                            </div>
                            :
                            <div className="text-center my-4">
                                No more messages.
                            </div>
                }
            </div>
            <form onSubmit={handleSubmit} className="py-8">
                {
                    attachments.length > 0 &&
                    <div className="flex items-center space-x-4">
                        {
                            attachments.map((file, i) => {
                                return (
                                    <div className="relative">
                                        <button onClick={() => removeFromArray(i)} type="button" style={{ right: -8, top: -8 }} className="absolute rounded bg-red-500 p-2 h-4 w-4 flex items-center justify-center text-white">
                                            X
                                        </button>
                                        <img src={URL.createObjectURL(file)} className="h-16 w-16 rounded" />
                                    </div>
                                )
                            })
                        }
                    </div>
                }
                <div className="flex items-center space-x-4">
                    <input type="text"
                        placeholder="Write your message..."
                        className="focus:border-none focus:ring-none focus:ring-gray-200 w-full h-16"
                        value={message}
                        onChange={(e) => setMessage(e?.target?.value)}
                        autoFocus
                        style={{
                            border: 'none',
                            borderBottom: '1px solid #d1d1d1',
                            background: 'transparent'
                        }}
                    />
                    <div className="w-4/12 md:w-2/12 flex justify-around">
                        <label htmlFor="files" style={{ backgroundColor: '#f59e0b' }} className="cursor-pointer text-white px-6 py-4 rounded-full">
                            <IoAttachOutline />
                            <input multiple onChange={handleAttachments} type="file" id="files" style={{ display: 'none' }} accept="image/png, image/jpeg" />
                        </label>
                        <button disabled={newMessageLoading} className="bg-main text-white px-6 py-4 rounded-full">
                            {
                                newMessageLoading ?
                                    'sending...'
                                    :
                                    <IoSendSharp />
                            }
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ChatsDetails;