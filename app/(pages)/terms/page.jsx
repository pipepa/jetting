import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header";
import DefaultFooter from "@/components/footer";
import TermsContent from "@/components/common/TermsContent";

export const metadata = {
  title: "Terms & Conditions || Jetting.com, all-in-one travel booking platform",
  description: "Jetting.com, all-in-one travel booking platform",
};

const Terms = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="tabs js-tabs">
            <TermsContent />
          </div>
        </div>
      </section>
      {/* End terms section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default Terms
