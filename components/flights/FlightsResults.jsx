'use client'

import React, { useMemo } from 'react'
import useDebouncedEffect from "@/hooks/useDebouncedEffect"
import Image from "next/image";
import TopHeaderFilter from "@/components/flights/TopHeaderFilter";
import FlightProperty from "@/components/flights/FlightProperty";
import Pagination from "@/components/common/Pagination"
import Sidebar from "@/components/flights/sidebar/Sidebar";
import FlightsMode from "@/components/flights/FlightsMode";
import { useFlightsResults } from '@/components/flights/FlightsResultsContext'
import FlightsDates from "@/components/flights/FlightsDates"
import FlightsProviders from "@/components/flights/FlightsProviders"
// import Subscribe from '@/components/common/Subscribe'
import PriceAlert from '@/components/flights/PriceAlert'

const FlightsResults = () => {
  const { flightResultsRaw, flightResults, currentPage, setCurrentPage, status, MAX_ITEMS, pickedTickets, canPaginate, maxPage } = useFlightsResults()

  // Memoized pagination
  const paginatedFlightResults = useMemo(() => {
    return flightResults
      ? flightResults.slice(0, currentPage * MAX_ITEMS)
      : []
  }, [flightResults, currentPage])

  useDebouncedEffect(() => {
    if (canPaginate) {
      const observer = new IntersectionObserver(entries => {
        // Only one target is observed
        if (entries[0].isIntersecting && canPaginate) {
          setCurrentPage(prevPage => prevPage + 1)
        }
      }, {
        rootMargin: '100px'  // Load more content even if 100px away from viewport
      })
    
      // There is an element to observe
      const element = document.querySelector('#load_more_button')
      if (element) observer.observe(element)
    
      return () => {
        if (element) observer.unobserve(element)
      }
    }
  }, 150, [canPaginate])

  //price alert
  const filteredAgentsInitial = process.env.NEXT_PUBLIC_FILTERED_AGENTS ? JSON.parse(process.env.NEXT_PUBLIC_FILTERED_AGENTS) : []
  const filteredAgentsAdditional = process.env.NEXT_PUBLIC_ADDITIONAL_FILTERED_AGENTS ? JSON.parse(process.env.NEXT_PUBLIC_ADDITIONAL_FILTERED_AGENTS) : []
  const filteredAgents = [...filteredAgentsInitial, ...filteredAgentsAdditional]

  const getSortedFlightsByCheapestDeal = (flightResults, filteredAgents) => {
    const filteredFlights = [];
  
    for (const flight of flightResults) {
      // Find the cheapest deal with an agent in the filteredAgents list
      const validDeals = flight.deals.filter(deal =>
        filteredAgents.includes(deal.agents[0].name) &&
        !isNaN(deal.priceAmount)
      );
  
      if (validDeals.length > 0) {
        const cheapestDeal = validDeals.reduce((cheapest, deal) => {
          return !cheapest || deal.priceAmount < cheapest.priceAmount ? deal : cheapest;
        }, null);
  
        if (cheapestDeal) {
          filteredFlights.push({
            ...flight,
            cheapestDeal: cheapestDeal
          });
        }
      }
  
      // Stop adding to the array once we have 8 items
      if (filteredFlights.length === 8) break;
    }
  
    // Sort these flights by the cheapest deal price
    return filteredFlights.sort((a, b) => a?.cheapestDeal?.priceAmount - b?.cheapestDeal?.priceAmount);
  };

  const getPriceRange = (sortedFlights) => {
    if (!sortedFlights || sortedFlights.length === 0) return { median: 0, minPrice: 0, maxPrice: 0 };
  
    const prices = sortedFlights.map(flight => flight?.cheapestDeal?.priceAmount)
    
    // Calculate median
    const middleIndex = Math.floor(prices.length / 2);
    const median = prices.length % 2 !== 0 ? prices[middleIndex] : (prices[middleIndex - 1] + prices[middleIndex]) / 2;
  
    // Lowest price
    const minPrice = prices[0];
    // Calculate average of lowest and median prices
    const typicalLow = (minPrice + median) / 2;
  
    return { median, minPrice: Math.ceil(typicalLow), maxPrice: Math.ceil(median) };
  };

  const priceAlertSortedFlights = useMemo(() => {
    return getSortedFlightsByCheapestDeal(flightResults, filteredAgents);
  }, [flightResults, filteredAgents]);

  const { minPrice: priceAlertMinPrice, maxPrice: priceAlertMaxPrice } = useMemo(() => {
    return getPriceRange(priceAlertSortedFlights);
  }, [priceAlertSortedFlights]);

  return (
    <section className="pt-10 pb-50 bg-new-1">
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <aside className="sidebar xl:d-none">
              <div className="row y-gap-30">
                <Sidebar />
              </div>
            </aside>

            {/* Offcanvas sidebar for filtering */}
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="listingSidebar">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasLabel">Filter Flights</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <aside className="sidebar y-gap-40 xl:d-block">
                  <Sidebar />
                </aside>
              </div>
            </div>
          </div>

          <div
            className="col-xl-9" id="results"
            style={{ scrollMarginTop: '120px'}}
          >
            <FlightsDates />
            {status ? (
              <>
                <FlightsProviders filteredAgents={filteredAgents} />
                <TopHeaderFilter />
                {status == 'Loading' && <FlightsMode mode={status} /> }
                <div className="row">

                  {/* Subscribe
                  <Subscribe />  */}
                  {flightResultsRaw.length > 0 ? (
                    paginatedFlightResults.length > 0 ? paginatedFlightResults.map((item, index) => (
                      <>
                      <FlightProperty
                        key={index}
                        flightItem={item}
                        pickedTickets={pickedTickets}
                        searchStatus={status}
                      />
                      {index === 0 && priceAlertSortedFlights[0]?.cheapestDeal && (
                        <>
                          <PriceAlert
                            key={`PriceAlert${index}`}
                            flightItem={priceAlertSortedFlights[0]}
                            deal={priceAlertSortedFlights[0]?.cheapestDeal}
                            typicalPrice={{
                              min: priceAlertMinPrice,
                              max: priceAlertMaxPrice
                            }}
                            searchStatus={status}
                          />
                        </>
                      )}
                      </>
                    )) : <NoResults status={'Empty'} />
                  ) : status == 'Completed' && <NoResults status={status} />
                  }
                </div>
                <Pagination canPaginate={canPaginate} maxPage={maxPage} currentPage={currentPage} setCurrentPage={setCurrentPage} id="load_more_button" />
              </>
            ) : (
              <FlightsMode mode={status} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

function NoResults({ status }) {
  const imageSrc = status === 'Completed' ? "/img/flights/agent.svg" : "/img/flights/flight-travel.svg"
  const altText = "Jetting Flights"

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

export default FlightsResults;
