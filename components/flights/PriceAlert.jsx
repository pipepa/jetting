'use client'

import Image from "next/image"
import Link from "next/link";
import { formatDateTime } from "@/helpers/main"
import { formatSkyscannerImageUrl } from "@/helpers/skyscanner"

const PriceAlert = ({
  flightItem,
  deal,
  typicalPrice,
  searchStatus,
}) => {
  
  const { formattedDate: outboundDate } = formatDateTime(flightItem.outbound.departureDateTime, true, ['month', 'day'] )
  const { formattedDate: inboundDate } = formatDateTime(flightItem.inbound?.departureDateTime, true, ['month', 'day'] )

  const showPriceCallToAction = Math.ceil((typicalPrice.min + typicalPrice.max) / 2) > deal.priceAmount

  return (
    <Link
      href={`${deal.items[0].deepLink}`}
      target="_blank"
      // rel="noopener noreferrer"
      title={deal.agents[0].name}
      className="col-12"
      // key={}
    >
      <div className="px-24 py-15 rounded-22 bg-new-2 mt-20">
        <div className="row x-gap-20 y-gap-20 items-center justify-between">
          <div className="col-auto">
            <div className="flex-center">
              <Image
                width={80}
                height={80}
                src="/img/badges/bestprice.png"
                alt="best price"
              />
            </div>
          </div>
          <div className="col-auto">
            <h4 className="text-18 lh-15 fw-500">
              Great Value!
            </h4>
            <div className="lh-15">
              {flightItem.outbound.originPlace.iata}
              {flightItem.inbound ? (
                <>
                {/* <Image
                  width="14"
                  height="14"
                  className="ml-5 mr-5 pb-2"
                  src="/img/flights/arrows-horizontal-dark.svg"
                  alt="round"
                /> */}
                <i className={`icon-transfer-arrows text-11 ml-5 mr-5`} />
                </>
              ) : (
                <i className={`icon-arrow-right text-11 ml-5 mr-5`} />
              )}
              {flightItem.outbound.destinationPlace.iata}
            </div>
            <div className="lh-15">
              {outboundDate}{' '}
              {inboundDate && (
                <>
                {' '}- {inboundDate}
                </>
              )}
            </div>
          </div>
          <div className="col-auto">
            <div className="flex-center">
              <Image
                className="rounded-8"
                width={120}
                height={60}
                src={formatSkyscannerImageUrl(deal.agents[0].name, deal.agents[0].imageUrl)}
                alt={`${deal.agents[0].name}`}
              />
            </div>
          </div>
          <div className="col-auto">            
            <div className="d-flex align-items-right">
              <div className="destinationCardCity lh-12">
                <span className="text-50 xxl:text-50 xl:text-50 md:text-50 sm:text-50">
                  {searchStatus == 'loading' && (
                    <>
                      <div className="loading-spinner mr-10" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                    </>
                  )}
                  ${deal.priceAmount}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PriceAlert;
