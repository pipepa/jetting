import DefaultHeader from "@/components/header";
import DefaultFooter from "@/components/footer";
import NotFound from "@/components/common/NotFound";
import CallToActions from "@/components/common/CallToActions";

export const metadata = {
  title: "404 | Jetting.com",
  description: "Page not found",
};

const index = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <NotFound />
      {/* End 404 section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default index
