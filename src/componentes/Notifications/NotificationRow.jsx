import { formatDistance } from "date-fns";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import {
    SELLER_REGISTERED,
    COMMENT_ANSWERED,
} from "../../util/NotificationsTypes";
import { Link } from "react-router-dom";

const NotificationRow = ({ notification, onReadNotification, onClickNotification }) => {

    const [currentNotification, setCurrentNotification] = useState(null);

    const [{ }, setReadNotification] = useAxios({ url: `/notifications/${currentNotification?.id}/mark-as-read`, method: 'put' }, { manual: true, useCache: false });

    useEffect(() => {
        if (notification) {
            setCurrentNotification(notification);
        }
    }, [notification]);

    var notificationUrl = '#';

    switch (notification?.type) {
        case COMMENT_ANSWERED:
            notificationUrl = `/comments`
            break;
        case SELLER_REGISTERED:
            notificationUrl = `/sellers/${notification?.additionalData?.sellerSlug}/recipes`
            break;
    }

    const timeDistance = (date, length) => {
        if (date) {
            const dateDistance = formatDistance(new Date(date), new Date());

            if (dateDistance?.length > length) {
                return `${dateDistance?.slice(0, length)}...`
            }

            return dateDistance;
        }
    }

    const handleClick = () => {
        setTimeout(() => {
            onClickNotification?.()
            if (!currentNotification?.readAt) {
                setCurrentNotification((oldNotification) => {
                    return {
                        ...oldNotification,
                        readAt: true
                    }
                });
                onReadNotification?.();
                setReadNotification();
            }
        }, [100])
    }

    return (
        <li className="my-4 border-b">
            <Link to={notificationUrl} onClick={handleClick}>
                <div className="flex items-center justify-between">
                    <h4 className="font-bold">
                        {currentNotification?.message?.length > 30 ?
                            `${currentNotification?.message?.slice(0, 30)}...`
                            :
                            currentNotification?.message
                        }
                    </h4>
                    {
                        !currentNotification?.readAt &&
                        <p className="text-main">Nueva</p>
                    }
                </div>
                <p>{timeDistance(currentNotification?.createdAt, 20)} ago</p>
            </Link>
        </li>
    )
}

export default NotificationRow;