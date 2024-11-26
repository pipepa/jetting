import React from "react";
import { notFound } from 'next/navigation'
import DefaultHeader from "@/components/header";
import DefaultFooter from "@/components/footer";
import CallToActions from "@/components/common/CallToActions";
import Breadcrumbs from "@/components/common/breadcrumbs"
import { continents } from "@/data/skyscannerContinents"
import Index from "@/components/events/Index";
import EventsLocation from "@/components/events/EventsLocation";

const EventsPage = ({ continentSlug }) => {
  const continent = continents.find((item) => item.slug == continentSlug) ?? null
  
  if (continentSlug && !continent) {
    notFound()
  }

  return (
    <>
      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <Breadcrumbs
        dataArrays={[continents]}
        link={{
          text: `Best flights ${continent ? `in ${continent.name}` : ''}`,
          href: `/flights`
        }}
      />

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">

          <div className="row x-gap-10 y-gap-10 item_gap-x10 layout-pb-md">
            <EventsLocation continent={continent ?? null} />
          </div>

          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Best Events {continent ? `in ${continent.name}` : 'Worldwide'}</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Travel to the most significant events and places {continent ? `in ${continent.name}` : 'around the world '}
                </p>
              </div>
            </div>
          </div>
          <Index
            continent={continent ?? null}
          />
        </div>
      </section>

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default EventsPage;
