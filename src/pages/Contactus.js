const Contactus = () => {
  return (
    <div className="">
      <div className="container md:p-20 p-4 h-full md:w-md mb-6 max-w-full">
        <p className="md:text-4xl text-2xl text-center md:text-justify font-bold text-black mb-6 md:mb-12">
          Contact us
        </p>
        <div className="bg-white p-4 md:p-10 rounded-lg md:h-full w-full shadow">
          <p className="md:text-xl text-base text-gray-500 font-medium">
            How can we help you?
          </p>
          <div className="my-6">
            <p className="text-sm text-gray-300">Email</p>
            <input
              type="text"
              className="
                           first-letter:block
                            w-full
                            rounded-lg 
                            border-gray-200
                            focus:ring-0 
                            focus:border-gray-200
                        "
              placeholder="xxxx@example.com..."
            />
          </div>
          <span className="text-main font-semibold">Leave us your query</span>
          <textarea
            className=" border-gray-200
                            focus:ring-0 focus:border-gray-200 rounded-lg w-full text-sm text-gray-300 hover:text-black hover:text-sm"
            placeholder="Your Massager..."
          ></textarea>
          <div className="m-4 text-right">
            <button className="bg-main text-white px-6 py-2 hover:bg-main-light font-semibold rounded-lg">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
