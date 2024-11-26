import React, { useState, useEffect, useRef, useMemo } from 'react'
import FlightDeals from "@/components/flights/FlightDeals"
import FlightPropertyItem from "@/components/flights/FlightPropertyItem"
import FlightPropertyDetails from "@/components/flights/FlightPropertyDetails"
import { pluralize, formatDateTime, formatMinutes } from "@/helpers/main"
import { getSkyscannerDateTimeDifference } from "@/helpers/skyscanner"

const FlightProperty = ({ flightItem, pickedTickets, searchStatus }) => {
  const outboundStops = useMemo(() => flightItem.outbound.steps.filter(step => step.transfer), [flightItem.outbound?.steps])
  const inboundStops = useMemo(() => flightItem.inbound?.steps.filter(step => step.transfer), [flightItem.inbound?.steps])

  const { formattedDate: outboundDate } = formatDateTime(flightItem.outbound.departureDateTime)
  const { formattedDate: inboundDate } = formatDateTime(flightItem.inbound?.departureDateTime)

  const [showFlightInformation, setShowFlightInformation] = useState(false)
  const contentRef = useRef(null)

  // Toggle function to expand or collapse the content
  const toggleFlightInformation = () => {
    setShowFlightInformation(!showFlightInformation)
  }

  useEffect(() => {
    if (contentRef.current) {
      if (showFlightInformation) {
        // When showing, set height to its scrollHeight
        contentRef.current.style.height = `${contentRef.current.scrollHeight + 30}px`
      } else {
        // When hiding, reset height to 0 to collapse
        contentRef.current.style.height = '0px'
      }
    }
  }, [showFlightInformation])

  const ticketType = pickedTickets.find((item) => {
    if (flightItem.itineraryId == item.ticket.itineraryId) {
      return item
    }
    return null
  })?.type
  
  return (
    <div className="js-accordion">
      <div className="flightsCard">
        <div className="row d-sm-flex">
          {ticketType && (
            <div className="watermark">{ticketType}</div>
          )}
          <div className="col pr-0 md:pr-15 relative">
            <FlightPropertyItem
              parentItemKey={`Inbound`}
              departureName={flightItem.outbound.originPlace.name}
              departureIata={flightItem.outbound.originPlace.iata}
              departureDatetime={flightItem.outbound.departureDateTime}

              arrivalName={flightItem.outbound.destinationPlace.name}
              arrivalIata={flightItem.outbound.destinationPlace.iata}
              arrivalDatetime={flightItem.outbound.arrivalDateTime}

              durationInMinutes={flightItem.outbound.durationInMinutes}
              segments={flightItem.outbound.segments}
              stops={outboundStops}
            />
            {flightItem.inbound && (
              <>
                <br />
                <FlightPropertyItem
                  parentItemKey={`Outbound`}
                  departureName={flightItem.inbound.originPlace.name}
                  departureIata={flightItem.inbound.originPlace.iata}
                  departureDatetime={flightItem.inbound.departureDateTime}

                  arrivalName={flightItem.inbound.destinationPlace.name}
                  arrivalIata={flightItem.inbound.destinationPlace.iata}
                  arrivalDatetime={flightItem.inbound.arrivalDateTime}

                  durationInMinutes={flightItem.inbound.durationInMinutes}
                  segments={flightItem.inbound.segments}
                  stops={inboundStops}
                />
              </>
            )}
          </div>
          {/* End .col */}

          <div className="col-md-auto relative">
            <div className="mt-20 border-top-light-dashed d-md-none" />
            <div className="d-flex items-center h-full">
              <div className="pl-30 border-left-light-dashed h-full md:d-none" />
              <div className="w-100">
                <div className="row flex-column md:flex-row md:justify-between">
                  <div className="col-auto text-right md:text-left mb-10">
                    <div className="text-18 lh-16 fw-600">${flightItem.minPrice}</div>
                    <div className="lh-16 text-light-1">
                      {searchStatus == 'Loading' ? (
                        <>
                          <div className="loading-spinner" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                          <span className='ml-5'>offers</span>
                        </>
                      ) : (
                        <>
                        {flightItem.deals.length} {pluralize(flightItem.deals.length, 'offer', 'offers')}
                        </>
                      )}
                    </div>
                  </div>

                  <FlightDeals deals={flightItem.deals} />
                </div>

                <div className="accordion__button text-right md:text-left pt-5 md:pt-0">
                  <button
                    className="text-12 underline text-blue"
                    onClick={toggleFlightInformation}
                  >
                    Flight information
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* End .col-md-auto */}
        </div>
        {/* End .row */}

        <div ref={contentRef} className={`collapse-custom ${showFlightInformation ? 'md:mt-15 show relative' : ''}`}>
          {showFlightInformation && (
            <>
            <div className="border-dashed rounded-16 mt-30">
              <div className="py-20 px-30">
                <div className="row justify-between items-center">
                  <div className="col-auto">
                    <div className="fw-500 text-dark-1">
                      Outbound • {outboundDate}
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="text-light-1">Total duration: {formatMinutes(flightItem.outbound.durationInMinutes, true)}</div>
                  </div>
                </div>
              </div>
              {flightItem.outbound.segments.map((segment, index) => {
                const nextSegment = flightItem.outbound.segments[index + 1]
                const stopDuration = nextSegment ? getSkyscannerDateTimeDifference(segment.arrivalDateTime, nextSegment.departureDateTime): '0 minutes'
                return (
                  <FlightPropertyDetails
                    key={`Outbound${index}`}
                    item={segment}
                    isStop={!!nextSegment}
                    stopDuration={stopDuration}
                    isTransferRequired={nextSegment ? segment.destinationPlaceId !== nextSegment.originPlaceId : false}
                  />
                )
              })}
            </div>
            
            {flightItem.inbound && (
              <div className="border-dashed rounded-16 mt-30">
                <div className="py-20 px-30">
                  <div className="row justify-between items-center">
                    <div className="col-auto">
                      <div className="fw-500 text-dark-1">
                        Inbound • {inboundDate}
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="text-light-1">Total duration: {formatMinutes(flightItem.inbound.durationInMinutes, true)}</div>
                    </div>
                  </div>
                </div>
                {flightItem.inbound.segments.map((segment, index) => {
                  const nextSegment = flightItem.inbound.segments[index + 1]
                  const stopDuration = nextSegment ? getSkyscannerDateTimeDifference(segment.arrivalDateTime, nextSegment.departureDateTime): '0 minutes'
                  return (
                    <FlightPropertyDetails
                      key={`Inbound${index}`}
                      item={segment}
                      isStop={!!nextSegment}
                      stopDuration={stopDuration}
                      isTransferRequired={nextSegment ? segment.destinationPlaceId !== nextSegment.originPlaceId : false}
                    />
                  )
                })}
              </div>
            )}
            </>
          )}
        </div>
        {/* End collapase content */}
      </div>
      {/* End bg-white */}
    </div>
  )
}

export default FlightProperty
