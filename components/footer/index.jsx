import AppButton from "./AppButton";
import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";
import FooterContent from "./FooterContent";
import Image from "next/image";

const index = () => {
  return (
    <>
    <footer className="footer -type-1 text-12">
      <div className="container">
        <div className="pt-60 pb-60">
          <div className="row y-gap-40 justify-between xl:justify-start">
            <div className="col-xl-2 col-lg-4 col-sm-6">
              <h5 className="text-16 fw-500 mb-30">Contact us by:</h5>
              <ContactInfo />
            </div>
            {/* End col */}

            <FooterContent />
            {/* End footer menu content */}

            <div className="col-xl-2 col-lg-4 col-sm-6 text-center x-gap-10 y-gap-10">
              <Image
                width={120}
                height={120}
                className="w-max-120"
                src="/img/badges/bestprice.png"
                alt="Best Price Guarantee"
              />
              <Image
                width={191}
                height={61}
                className="h-max-70 mb-10"
                src="/img/badges/exploring.png"
                alt="Exploring"
              />
              <Image
                width={120}
                height={28}
                className="w-max-120"
                src="/img/logo/logo.svg"
                alt="Jetting.com logo"
              />
            </div>
          </div>
        </div>
        {/* End footer top */}

        <div className="py-20 border-top-light">
          <Copyright />
        </div>
        {/* End footer-copyright */}
      </div>
      {/* End container */}
    </footer>
    
    <script src="https://referral.page/tracking.js" data-project-id="51"></script>
    </>
  );
};

export default index;
