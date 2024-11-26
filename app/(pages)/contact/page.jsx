import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header";
import DefaultFooter from "@/components/footer";
import Address from "@/components/block/Address";
import Social from "@/components/common/social/Social";
import ContactForm from "@/components/common/ContactForm";
import Faq from "@/components/faq/Faq";

export const metadata = {
  title: "Contact | Jetting.com",
  description: "Contact Jetting.com",
};

const Contact = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />

      <div className="map-outer">
        <div className="map-canvas">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56182.40020346716!2d-0.05820414962701292!3d51.51441288183832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sua!4v1709569825804!5m2!1sen!2sua"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {/* End map section */}

      <section className="relative container layout-pb-md sm:pb-60">
        <div className="row justify-end">
          <div className="col-xl-5 col-lg-7">
            <div className="map-form px-40 pt-40 pb-50 lg:px-30 lg:py-30 md:px-24 md:py-24 bg-white rounded-22 shadow-1">
              <div className="text-22 fw-500">Send a message</div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      {/* End contact section form */}

      <section className="layout-pt-md layout-pb-md bg-light-2">
        <div className="container">
          <div className="row x-gap-80 y-gap-20 justify-between">
            <div className="col-12">
              <div className="text-30 sm:text-24 fw-600">Get in Touch</div>
            </div>
            {/* End .col */}

            <Address />
            {/* End address com */}

            <div className="col-auto">
              <div className="text-14 text-light-1">
                Follow us on social media
              </div>
              <div className="d-flex x-gap-20 items-center mt-10">
                <Social />
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Address Section */}

      <section className="layout-pt-md layout-pb-lg sm:pt-60">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Frequently Asked Questions
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Answers to the most commonly asked questions
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 justify-center pt-40 sm:pt-20">
            <div className="col-xl-7 col-lg-10">
              <div
                className="accordion -simple row y-gap-20 js-accordion"
                id="Faq1"
              >
                <Faq dataName="Contact" />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End faq section block */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default Contact
