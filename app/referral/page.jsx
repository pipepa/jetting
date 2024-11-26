import Referral from "@/components/referral";
import Header from "@/components/header/flights";
import Footer from "@/components/footer/FooterReferral";

const referralPage = () => {
  return (
    <div className="min-h-100vh d-flex flex-col">
      <Header />
      <div className="flex-grow d-flex items-center justify-center">
        <Referral />
      </div>
      <Footer />
    </div>
  );
};

export default referralPage;
