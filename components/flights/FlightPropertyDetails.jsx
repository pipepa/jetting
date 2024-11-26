
// import { pluralize, formatDateTime, formatMinutes } from "@/helpers/main"
import { formatDateTime, formatMinutes } from "@/helpers/main"
import { formatSkyscannerImageUrl } from "@/helpers/skyscanner"
// import { useSearchForm } from '@/components/search-form/flights/FlightsSearchProvider'
import ImageWithFallback from '@/components/image-with-fallback'

const FlightPropertyDetails = ({
  item,
  isStop,
  stopDuration,
  isTransferRequired,
}) => {
  const { formattedDate: formattedDepartureDate, formattedTime: formattedDepartureTime } = formatDateTime(item.departureDateTime)
  const { formattedDate: formattedArrivalDate, formattedTime: formattedArrivalTime } = formatDateTime(item.arrivalDateTime)
  
  // const { flightsSearchData } = useSearchForm()

  return (
    <>
    {item && (
    <>
      <div className="py-20 px-20 border-top-dashed">
        <div className="row y-gap-10 justify-between">
          <div className="col-auto">
            <div className="d-flex items-center mb-15">
              <div className="w-80 d-flex justify-center mr-15">
                <ImageWithFallback
                  src={formatSkyscannerImageUrl(item.carrier.name, item.carrier.imageUrl)}
                  width="150"
                  height="100"
                  fallbackSrc='/img/flights/carriers/default.png'
                  alt={item.carrier.name}
                  className="rounded-8"
                />
              </div>
              <div className="text-14 text-light-1">
                {item.carrier.name}
              </div>
            </div>
            <div className="relative z-0">
              <div className="border-line-2" />
              <div className="d-flex items-center">
                <div className="w-28 d-flex justify-center mr-15">
                  <div className="size-10 border-light rounded-full bg-white" />
                </div>
                <div className="row">
                  <div className="col-md-auto col-sm-12">
                    <div className="lh-14 fw-500">{formattedDepartureTime} <br /> <span className="text-12 text-light-1">{formattedDepartureDate}</span></div>
                  </div>
                  <div className="col-md-auto col-sm-12">
                    <div className="lh-14 fw-500">
                      {item.originPlace.name} ({item.originPlace.iata})
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex items-center mt-15">
                <div className="w-28 d-flex justify-center mr-15">
                  <i className="icon-aircraft text-18 text-rich-300"></i>
                </div>
                <div className="text-14 italic">{formatMinutes(item.durationInMinutes, true)}</div>
              </div>
              <div className="d-flex items-center mt-15">
                <div className="w-28 d-flex justify-center mr-15">
                  <div className="size-10 border-light rounded-full bg-border" />
                </div>
                <div className="row">
                  <div className="col-md-auto col-sm-12">
                    <div className="lh-14 fw-500">{formattedArrivalTime} <br /> <span className="text-12 text-light-1">{formattedArrivalDate}</span></div>
                  </div>
                  <div className="col-md-auto col-sm-12">
                    <div className="lh-14 fw-500">
                      {item.destinationPlace.name} ({item.destinationPlace.iata})
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-auto text-right md:text-left">
            {/*<div className="text-14 text-light-1">{flightsSearchData.classType}</div>
            <div className="text-14 mt-15 md:mt-5">
            <span>{flightsSearchData.passengerCounts.Adults}</span> {pluralize(flightsSearchData.passengerCounts.Adults, 'adult', 'adults')} {" "}
            {flightsSearchData.passengerCounts.Children ? (
              <>
              - {" "} <span>{flightsSearchData.passengerCounts.Children}</span> {pluralize(flightsSearchData.passengerCounts.Children, 'child', 'children')} {" "}
              </>
            ) : ''}
            {flightsSearchData.passengerCounts.Infants ? (
              <>
                - {" "} <span>{flightsSearchData.passengerCounts.Infants}</span> {pluralize(flightsSearchData.flightsSearchData.passengerCounts.Infants, 'infant', 'infants')}
              </>
            ) : ''}
            </div>*/}
          </div>

        </div>        
      </div>
        {isStop && (
          <div className="text-center mb-5">
            <i className="icon-clock text-12"></i> Stop {stopDuration}
            {isTransferRequired && (
              <p className="lh-12 text-12 text-red-1 px-5 pb-5"><i className="icon-notification"></i> Transfer Needed! Arriving and departing from different airports requires airport transfers</p>
            )}
          </div>
        )}
    </>
    )}
    </>
  )
};

export default FlightPropertyDetails;
