import React, { useEffect, useState } from 'react'
import { useFeedBack } from '../contexts/FeedBackContext'
import useAxios from '../hooks/useAxios'
import ButtonChange from './ButtonChange'

const PasswordUser = ({ title, text, spam }) => {

  const { setLoading } = useFeedBack();

  const [data, setData] = useState({
    password: "",
    currentPassword: '',
    passwordConfirm: ''
  });


  const [showResponseMessage, setShowResponseMessage] = useState(false);

  const [{ loading }, updatePassword] = useAxios({ url: `/auth/password`, method: 'PUT' }, { useCache: false, manual: true });

  useEffect(() => {
    if (showResponseMessage) {
      setTimeout(() => {
        setShowResponseMessage(false);
      }, [3000])
    }
  }, [showResponseMessage])

  useEffect(() => {
    setLoading({
      show: loading,
      message: 'Loading'
    })
  }, [loading]);

  const handleChange = (e) => {
    setData((oldData) => {
      return {
        ...oldData,
        [e.target.name]: e.target.value
      }
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data?.password !== data?.passwordConfirm) {
      alert('Las contraseñas no coinciden');
    }

    const { passwordConfirm, ...rest } = data;

    updatePassword({ data: { ...rest } }).then(() => {
      setShowResponseMessage(true);

      setData({
        password: "",
        currentPassword: '',
        passwordConfirm: ''
      });
    });

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="lg:flex" style={{ maxWidth: '100%' }}>
        <div className="ml-2 mt-6 md:mt-2">
          <label
            htmlFor="user"
            className="text-gray-600 font-bold md:text-xl"
          >
            {title}
          </label>
          <input
            name='currentPassword'
            onChange={handleChange}
            value={data?.currentPassword}
            type="password"
            className="md:mt-6 md:text-xl text-base border rounded-lg w-full h-10 block"
            placeholder='Password'
          />
        </div>
        <div className="ml-2 mt-4 md:mt-2">
          <label
            htmlFor="user"
            className="text-gray-600 font-bold md:text-xl"
          >
            {text}
          </label>
          <input
            name='password'
            onChange={handleChange}
            value={data?.password}
            type="password"
            className="md:mt-6 md:text-xl text-base border rounded-lg w-full h-10 block"
            placeholder='Password'
          />
        </div>
        <div className="ml-2  mt-4 md:mt-2">
          <label
            htmlFor="user"
            className="text-gray-600 font-bold md:text-xl"
          >
            {spam}
          </label>
          <input
            name='passwordConfirm'
            onChange={handleChange}
            value={data?.passwordConfirm}
            type="password"
            className="md:mt-6 md:text-xl text-base border rounded-lg w-full h-10 block"
            placeholder='Password'
          />
        </div>
      </div>
      <div className="flex items-center space-x-4 justify-center md:justify-end mt-4">
        {
          showResponseMessage &&
          <span className='animate__animated animate__fadeInLeft'>
            The password has been updated
          </span>
        }
        <ButtonChange />
      </div>
    </form>
  )
}

export default PasswordUser