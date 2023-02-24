import React, { useEffect, useState } from "react";
import { CardWithTitle } from "../componentes/CardWithTitle";
import PasswordUser from "../componentes/PasswordUser";
import profile from "../assets/profile.png"
import paypal from "../assets/paypal.png"
import { useAuth } from "../contexts/AuthContext";
import useAxios from "../hooks/useAxios";
import imgUrl from "../helpers/imgUrl";


const AccountInfo = () => {

  const { user } = useAuth();

  const [{ data, loading, error }, getData] = useAxios({ url: `/clients/${user?.id}` }, { useCache: false });

  const [{ data: updateData, loading: updateLoading, error: updateError }, update] = useAxios({ url: `/clients/${user?.id}`, method: 'put' }, { manual: true, useCache: false });

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (currentUser?.image) {
      handleSubmit();
    }
  }, [currentUser?.image])

  useEffect(() => {
    if (updateData) {
      console.log(updateData);
    }
  }, [updateData])

  useEffect(() => {
    if (data) {
      console.log(data);
      setCurrentUser(data);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e?.preventDefault();

    if (updateLoading) return;

    const { createdAt, imgPath, id, userStatus, ...rest } = currentUser;

    const formData = new FormData();


    Object?.keys(rest).forEach((key, i) => {
      if (rest[key]) {
        if (key === "image") {
          formData?.append(key, rest[key], rest[key]?.name);
        } else {
          formData?.append(key, rest[key]);
        }
      }
    });

    update({ data: formData });

  }

  const handleChange = (e) => {
    setCurrentUser((oldUser) => {
      return {
        ...oldUser,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleImage = (e) => {
    setCurrentUser((oldUser) => {
      return {
        ...oldUser,
        image: e.target.files[0]
      }
    });
  }

  return (
    <div className="container md:p-20 p-4 h-full md:w-md mb-6 max-w-full">
      <p className="md:text-4xl text-2xl text-center md:text-justify font-bold text-black mb-6 md:mb-12">My Profile</p>
      <form onSubmit={handleSubmit}>
        <CardWithTitle title="My personal Information">
          <div className="p-2 md:grid md:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center space-x-4">
              <img src={currentUser?.imgPath ? imgUrl(currentUser?.imgPath) : profile} alt="" className="w-20" />
              <label
                htmlFor="inputfile"
                className="bg-main md:flex justify-center items-center hover:bg-main-light text-white font-semibold text-center px-3 py-2 rounded-lg cursor-pointer"
              >
                Añadir Imagen
              </label>
              <input type="file" accept="image/png, image/gif, image/jpeg" onChange={handleImage} className="hidden" id="inputfile" />
            </div>
            <div>
              <label
                className="mt-4 block text-gray-600 font-bold md:text-xl"
                htmlFor="text"
              >
                Name
              </label>
              <input
                onChange={handleChange}
                name="name"
                type="text"
                className="md:mt-6 md:text-xl text-base border rounded-lg md:w-80 w-full h-10 block"
                id="text"
                placeholder='Name'
                value={currentUser?.name}
              />
            </div>
            <div>
              <label
                className="mt-4 block text-gray-600 font-bold md:text-xl"
                htmlFor="number"
              >
                Phone
              </label>
              <input
                onChange={handleChange}
                name="phoneNumber"
                className="md:mt-6 md:text-xl text-base border rounded-lg  md:w-80 w-full h-10 block"
                id="number"
                placeholder='00000000'
                value={currentUser?.phoneNumber}
              />
            </div>
            <div>
              <label
                className="mt-4 block text-gray-600 font-bold md:text-xl">
                Instagram User
              </label>
              <input
                onChange={handleChange}
                name="instagram"
                type="text"
                className="md:mt-6 md:text-xl text-base border rounded-lg md:w-80 w-full h-10 block"
                id="user"
                placeholder='@xxxxxxxxxx'
                value={currentUser?.instagram}
              />
            </div>
          </div>
          <div className="flex justify-center md:justify-end mt-4">
            <button disabled={updateLoading} className="bg-main hover:bg-main-light px-4 py-2 text-white font-semibold rounded-lg">
              {updateLoading ? 'Loading' : 'Change'}
            </button>
          </div>
        </CardWithTitle>

        <div className="mt-6">
          <CardWithTitle title="My Paypal User" className=" md:w-32">
            <div className="flex mt-4">
              <img src={paypal} alt="" className="w-20" />
              <div className="ml-2">
                <label
                  className="text-gray-600 font-bold md:text-xl"
                >
                  User
                </label>
                <input
                  onChange={handleChange}
                  name="paypal"
                  type="text"
                  className="md:mt-6 md:text-xl text-base border rounded-lg md:w-80 w-full h-10 block"
                  id="user"
                  placeholder='User'
                  value={currentUser?.paypal}
                />
              </div>
            </div>
            <div className="flex justify-center md:justify-end mt-4">
              <button disabled={updateLoading} className="bg-main hover:bg-main-light px-4 py-2 text-white font-semibold rounded-lg">
                {updateLoading ? 'Loading' : 'Change'}
              </button>
            </div>
          </CardWithTitle>
        </div>
      </form>

      <div className="mt-6">
        <CardWithTitle title="My Password" className="md:w-32">
          <PasswordUser
            className="md:w-32"
            title="Write Current Pasword"
            text="Write New Pasword"
            spam="Confirm New Pasword"
          />
        </CardWithTitle>
      </div>
    </div>
  );
};

export default AccountInfo;
