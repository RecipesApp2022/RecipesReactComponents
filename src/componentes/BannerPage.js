const BannerPage = ({ image, title }) => {
  return (
    <div
      className="md:h-96 h-70 flex justify-center items-center"
      style={{ background: `url(${image})`, backgroundSize: "100% 100%" }}
    >
      <h1
        className="text-white rounded-xl title py-24 lg:px-64 rounded-4xl"
        style={{ background: "rgba(0,0,0, .3)" }}
      >
        {title}
      </h1>
    </div>
  );
};

export default BannerPage;
