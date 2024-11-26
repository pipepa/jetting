import Social from "../common/social/Social";

const Copyright = () => {
  return (
    <div className="row justify-between items-center y-gap-10">
      <div className="col-auto">
        <div className="row x-gap-30 y-gap-10">
          <div className="col-auto">
            <div className="d-flex items-center">
              © {new Date().getFullYear()}
              <a
                href="https://jetting.com/about"
                className="mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jetting.com Ltd.
              </a>
              All rights reserved.
            </div>
          </div>
          {/* End .col */}

          <div className="col-auto">
            <div className="d-flex">
              Made with 🖤 by&nbsp;<a href="https://bxnda.com/" target="_blank" rel="noopener noreferrer">bxnda.com</a>
            </div>
          </div>
          {/* End .col */}
        </div>
        <div className="text-10 lh-1">
          All logos displayed on our website are trademarks of their respective owners or their affiliates
        </div>
        {/* End .row */}
      </div>
      {/* End .col */}

      <div className="col-auto">
        <div className="row y-gap-10 items-center">
          <div className="col-auto">
            <div className="d-flex items-center">
              <button className="d-flex items-center text-14 fw-500 text-dark-1 mr-10">
                <i className="icon-globe text-16 mr-10" />
                <span className="underline">English (US)</span>
              </button>
              <button className="d-flex items-center text-14 fw-500 text-dark-1">
                <i className="icon-usd text-16 mr-5" />
                <span className="underline">USD</span>
              </button>
            </div>
          </div>
          {/* End .col */}

          <div className="col-auto">
            <div className="d-flex x-gap-20 items-center">
              <Social />
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default Copyright;
