import Social from "../common/social/Social";

const index = () => {

  return (
    <footer className="footer -type-1 text-12">
      <div className="container">

        <div className="row justify-between items-center y-gap-10 py-10">
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
            </div>
            <div className="text-10 lh-1">
              All logos displayed on our website are trademarks of their respective owners or their affiliates
            </div>
            {/* End .row */}
          </div>
          {/* End .col */}
              {/* End .col */}

          <div className="col-auto">
            <div className="d-flex x-gap-20 items-center">
              <Social />
            </div>
          </div>
          {/* End .col */}
        </div>

      </div>
    </footer>
  );
};

export default index;
