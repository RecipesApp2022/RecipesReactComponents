import clsx from "clsx";
import { useRef, useState, useEffect } from "react";
import { BsBell } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext"
import useOutsideAlerter from "../../helpers/useOutsideAlerter";
import useAxios from "../../hooks/useAxios";
import useSocketIo from "../../hooks/useSocketIo";
import useUserNotifications from "../../hooks/useUserNotifications";
import NotificationRow from "./NotificationRow";


const NotificationComponent = () => {

    const modalRef = useRef();

    const { user } = useAuth();

    const [showNotifications, setShowNotifications] = useState(false);

    const [notificationsFilters, setNotificationsFilters] = useState({
        orderBy: 'createdAt,DESC',
        perPage: 10,
        page: 1,
    })

    const [{ data: notificationsCountData, loading: loadingNotificationCount }, getCount] = useAxios({ url: `notifications/count` }, { useCache: false });

    const [{ notifications, numberOfPages, loading }, getUserNotifications] = useUserNotifications({ axiosConfig: { params: { ...notificationsFilters } }, options: { useCache: false } });

    const [currentNotifications, setCurrentNotifications] = useState([]);

    const [notificationsCount, setNotificationsCount] = useState(0);

    useEffect(() => {
        if (useSocketIo) {
            useSocketIo.on(`SELLER`, handleNotification);
            useSocketIo.on(`user.${user?.id}`, handleNotification);
        } else {
            useSocketIo.removeAllListeners();
        }
    }, []);

    useEffect(() => {
        if (notificationsCountData) {
            setNotificationsCount(notificationsCountData?.unreadCount)
        }
    }, [notificationsCountData])

    useEffect(() => {
        if (notifications?.length > 0) {
            setCurrentNotifications((oldCurrentNotifications) => {
                return [...oldCurrentNotifications, ...notifications]
            });
        }
    }, [notifications]);

    useEffect(() => {
        document.title = notificationsCount > 0 ? `(${notificationsCount}) Recipes` : 'Recipes'
    }, [notificationsCount])

    const handleLoadMore = (e) => {
        e.preventDefault();
        if (notificationsFilters?.page < numberOfPages) {
            setNotificationsFilters((oldFilters) => {
                return {
                    ...oldFilters,
                    page: oldFilters?.page + 1
                }
            });
        }
    }

    const handleRead = () => {
        setNotificationsCount((oldNotificationsCount) => {
            return oldNotificationsCount - 1;
        })
    }

    const handleNotification = (notification) => {
        setCurrentNotifications((oldNotifications) => {
            return [notification, ...oldNotifications];
        });
        setNotificationsCount((count) => count + 1);
    }

    useOutsideAlerter(modalRef, () => {
        setTimeout(() => {
            setShowNotifications(false)
        }, [100])
    });

    if (!user) return null;

    return (
        <div className="relative">
            <button
                onClick={() => setShowNotifications((oldValue) => !oldValue)}
                className={clsx(["hover:text-main"], {
                    "text-main": showNotifications
                })}
            >
                {
                    notificationsCount > 0 ?
                        <div className="absolute bg-red-500 text-white rounded-full h-6 w-6 flex" style={{ top: '-10px', right: '-10px' }}>
                            <p className="m-auto">{notificationsCount}</p>
                        </div>
                        :
                        null
                }
                <BsBell className="h-6 w-6" />
            </button>
            {
                showNotifications &&
                <ul
                    ref={modalRef}
                    style={{
                        minWidth: '300px',
                        maxHeight: '400px',
                        overflowY: 'auto'
                    }}
                    className="absolute notifications-modal z-50 bg-white text-black custom-scrollbar custom-scrollbar-main right-0 px-8 py-4 rounded-xl shadow"
                >
                    <li className="flex items-center justify-between w-full">
                        <h3 className="text-xl font-bold">
                            Mis notificaciones
                        </h3>
                        <button
                            onClick={() => setShowNotifications((oldValue) => !oldValue)}
                            className="close-notifications-button bg-red-500 text-white h-8 w-8 rounded hidden">
                            X
                        </button>
                    </li>
                    {
                        currentNotifications?.length > 0 ?
                            currentNotifications?.map?.((notification, i) => {
                                return (
                                    <NotificationRow
                                        onClickNotification={() => setShowNotifications((oldValue) => !oldValue)}
                                        onReadNotification={handleRead}
                                        notification={notification}
                                        key={i}
                                    />
                                )
                            })
                            :
                            <li className="my-4 text-red-500 text-center font-bold">
                                No notifications found.
                            </li>
                    }
                    <li className="text-center">
                        {
                            loading ?
                                <div className="text-center all-notification">
                                    Loading...
                                </div>
                                :
                                numberOfPages > notificationsFilters?.page ?
                                    <button disabled={notificationsFilters?.page >= numberOfPages} onClick={handleLoadMore} className="bg-main rounded-3xl text-white px-4 py-2">
                                        Cargar mas
                                    </button>
                                    :
                                    null
                        }
                    </li>
                </ul>
            }
        </div>
    )
}

export default NotificationComponent;