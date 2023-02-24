
const NotificationTypeCheck = ({ notificationType, values, onChange }) => {

    return (
        <label className="p-4 space-x-4 flex items-center" htmlFor={`notification-type-${notificationType?.code}`}>
            <input
                type="checkbox"
                checked={values?.includes(notificationType?.code)}
                onChange={() => onChange?.(notificationType?.code)}
                id={`notification-type-${notificationType?.code}`}
            />
            <p>
                {
                    notificationType?.name
                }
            </p>
        </label>
    )
}

export default NotificationTypeCheck;