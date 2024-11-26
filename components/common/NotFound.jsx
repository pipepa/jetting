import Link from "next/link";

const NotFound = () => {
  const data = {
    imageSrc: "/img/misc/404.png",
    title: "Oops! It seems like you've taken a wrong turn",
    description:
      "The page you're searching for isn't available. Please try searching again or use the navigation menu.",
    buttonLabel: "Back to Homepage",
    buttonUrl: "/",
  };

  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-lg-6">
            <img src={data.imageSrc} alt="404" />
          </div>
          <div className="col-lg-5">
            <div className="no-page">
              <div className="no-page__title">
                40<span className="text-dark-3">4</span>
              </div>
              <h2 className="text-30 fw-600">{data.title}</h2>
              <div className="pr-30 mt-5">{data.description}</div>
              <div className="d-inline-block mt-40 md:mt-20">
                <Link
                  href={data.buttonUrl}
                  className="button -md -dark-4 bg-blue-1-05 text-black"
                >
                  {data.buttonLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
