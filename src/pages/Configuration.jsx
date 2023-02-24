import clsx from "clsx";
import React, { useEffect, useState } from "react";
import ButtonChange from "../componentes/ButtonChange";
import { CardWithTitle } from "../componentes/CardWithTitle";
import NotificationTypeCheck from "../componentes/NotificationTypeCheck";
import useAxios from "../hooks/useAxios";
import useNotificationTypes from "../hooks/useNotificationTypes";

const Configuration = () => {

  const [filters, setFilters] = useState({
    page: 1,
    perPage: 100,
    role: 'CLIENT'
  });

  const [currentNotificationsTypes, setCurrentNotificationsTypes] = useState([]);

  const [showResponseMessage, setShowResponseMessage] = useState(false);

  const [{ notificationTypes, total, numberOfPages, size, error, loading }, getNotificationTypes] = useNotificationTypes({ params: { ...filters }, options: { useCache: false } });

  const [{ data, loading: saveLoading }, toggleActiveNotificationType] = useAxios({ url: `/notification-types/configure`, method: 'POST' }, { manual: true, useCache: false });

  useEffect(() => {
    if (showResponseMessage) {
      setTimeout(() => {
        setShowResponseMessage(false);
      }, 3000)
    }
  }, [showResponseMessage])

  useEffect(() => {
    if (notificationTypes?.length > 0) {
      const selectedTypes = [];

      notificationTypes?.forEach(notificationType => {
        if (notificationType?.isActive) {
          return selectedTypes?.push(notificationType?.code);
        }
      });

      setCurrentNotificationsTypes(selectedTypes);
    }
  }, [notificationTypes]);

  const handleSaveNotifications = () => {
    toggleActiveNotificationType({
      data: {
        notificationTypeCodes: currentNotificationsTypes
      }
    }).then(() => {
      setShowResponseMessage({
        show: true,
        message: 'Saved',
        severity: 'success'
      });
    }).catch(() => {
      setShowResponseMessage({
        show: true,
        message: 'An error has occurred',
        severity: 'error'
      });
    });
  }

  const handleChange = (anotherValue) => {
    const value = currentNotificationsTypes?.includes(anotherValue);
    if (value) {
      const newValues = currentNotificationsTypes?.filter(n => n !== anotherValue);
      setCurrentNotificationsTypes(newValues);
    } else {
      setCurrentNotificationsTypes((oldData) => {
        return [...oldData, anotherValue]
      });
    }
  }

  return (
    <div className="container md:p-20 p-4 h-full md:w-md mb-6 max-w-full">
      <p className="md:text-4xl text-2xl text-center md:text-justify font-bold text-black mb-6 md:mb-12">Cofiguration</p>
      {/* <CardWithTitle title="Language" className="md:w-32">

      </CardWithTitle> */}
      <div className="mt-6">
        {/* <CardWithTitle title="Measurement units">
          <Config title="Metricas (Gramos)" spam="US (Onzas)" />
        </CardWithTitle> */}
        <div className="mt-6">
          <CardWithTitle title="My servings">
            <div className="mt-10">
              <select
                id="Rating"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-main block md:w-60 w-52 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
              >
                <option selected>Porciones</option>
                <option value="">1 Porcion</option>
                <option value="">2 Porcion</option>
                <option value="">3 Porcion</option>
                <option value="">4 Porcion</option>
                <option value="">5 Porcion</option>
              </select>
            </div>
            <div className="flex md: justify-center md:justify-end mt-6 ">
              <ButtonChange />
            </div>
          </CardWithTitle>
        </div>
        <div className="mt-6">
          <CardWithTitle title="Notifications">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {
                notificationTypes?.map((notificationType, i) => {
                  return (
                    <NotificationTypeCheck
                      notificationType={notificationType}
                      key={i}
                      onChange={handleChange}
                      values={currentNotificationsTypes}
                    />
                  )
                })
              }
            </div>
            <div className="flex md: justify-center md:justify-end mt-6 items-center space-x-4">
              {
                showResponseMessage?.show &&
                <div className={clsx("animate__animated animate__fadeInLeft", {
                  "text-main": showResponseMessage?.severity === 'success',
                  "text-red-500": showResponseMessage?.severity === 'error'
                })}>
                  {
                    showResponseMessage?.message
                  }
                </div>
              }
              <ButtonChange
                onClick={handleSaveNotifications}
                loading={saveLoading}
              />
            </div>
          </CardWithTitle>
        </div>
      </div>
    </div>
  );
};

export default Configuration;
