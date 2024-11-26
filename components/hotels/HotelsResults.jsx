'use client'

import { useState } from "react";
import TopHeaderFilter from "@/components/hotels/common/TopHeaderFilter";
import Sidebar from "@/components/hotels/sidebar";
import Topbar from "@/components/hotels/topbar";
import { useHotelsResults } from '@/components/hotels/HotelsResultsProvider'
import HotelsMode from "@/components/hotels/HotelsMode";
import HotelsProviders from "@/components/hotels/HotelsProviders";
import Pagination from "@/components/common/Pagination"
import HotelProperty from "@/components/hotels/HotelProperty"

const HotelsResults = () => {
  const { hotelsCount, hotelResults, status, currentPage, setCurrentPage, canPaginate, maxPage } = useHotelsResults()

  const filteredAgents = []

  return (
    <section className="layout-pt-sm layout-pb-md bg-new-1">
      <div className="container">
        <div className={`relative ${status == 'Loading' ? 'pointer-events-none' : ''}`}>
          {status == 'Loading' && (
            <div className="loading-overlay">
            </div>
          )}
          <div className={`py-15 ${status == 'Loading' ? 'overflow-hidden' : ''}`}>
            <div className="row y-gap-20 justify-between items-center">
              <Topbar />

              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="listingSidebar"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasLabel">
                    Filter Hotels
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>                

                <div className="offcanvas-body">
                  <aside className="sidebar y-gap-40 xl:d-block">
                    <Sidebar />
                  </aside>
                </div>

              </div>

            </div>

            <div className="pt-10">
              <TopHeaderFilter status={status} hotelsCount={hotelsCount} />
            </div>
          </div>
        </div>

        {/*<div className="border-top-light mt-30 mb-30"></div>*/}

        <div className="layout-pt-sm layout-pb-md"
          id="results"
          style={{ scrollMarginTop: '120px'}}
        >
          {status ? (
            <>
              {/* <HotelsProviders filteredAgents={filteredAgents} /> */}
              {status == 'Loading' && <HotelsMode mode={status} /> }
              <div className="row y-gap-20 x-gap-15">
                {hotelResults.length > 0 ? (
                  hotelResults.map((item, index) => (
                    <>
                    <HotelProperty
                      key={index}
                      hotelItem={item}
                      searchStatus={status}
                    />
                    </>
                  ))
                ) : status == 'Completed' && <NoResults status={status} />
                }
              </div>
              {/* <Pagination canPaginate={canPaginate} maxPage={maxPage} currentPage={currentPage} setCurrentPage={setCurrentPage} id="load_more_button" /> */}
            </>
          ) : (
            <HotelsMode mode={status} />
          )}
        </div>

        <Pagination />

      </div>
    </section>
  )
}

function NoResults({ status }) {
  const imageSrc = status === 'Completed' ? "/img/flights/agent.svg" : "/img/flights/flight-travel.svg"
  const altText = "Jetting Hotels"

  return (
    <div className="container mt-50">
      <div className="row justify-center text-center">
        <div className="col-auto">
          <div className="sectionTitle -md">
            <h2 className="sectionTitle__title">No Results Found</h2>
            <p className="sectionTitle__text mt-5 sm:mt-0">{status == 'Completed' ? "Seems we couldn't find any flights matching your search criteria." : "Try adjusting your filters to find what you're looking for."}</p>
          </div>
        </div>
      </div>
      <div className="justify-center text-center">
        <Image width={400} height={400} src={imageSrc} alt={altText} />
      </div>
    </div>
  );
}

export default HotelsResults;