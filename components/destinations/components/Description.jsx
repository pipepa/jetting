'use client'

import { useSearchForm } from '@/components/search-form/flights/FlightsSearchProvider'

const Description = ({
    continent = null,
    country = null
}) => {
    const { fromPlace } = useSearchForm()

    return country ? (
        <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
                <div className="sectionTitle -md">
                    {fromPlace && (
                        <h2 className="sectionTitle__title">Discover the Cheapest Flights From {fromPlace.name} to {country.name}</h2>
                    )}
                    <p className=" sectionTitle__text mt-5 sm:mt-0">
                        Find affordable flights and uncover hidden gems across {country.name} with our curated list of cheap travel destinations
                    </p>
                </div>
            </div>

            <div className="col-auto md:d-none">
                <a
                    href={`/destinations/${continent.slug}`}
                    className="button -md -dark-1 bg-blue-1-05 text-dark-1"
                >
                    Browse Flights to {continent.name}
                    <div className="icon-arrow-top-right ml-15" />
                </a>
            </div>
        </div>
    ) : (
        <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
                <div className="sectionTitle -md">
                    {fromPlace && (
                        <h2 className="sectionTitle__title">Discover the Cheapest Flights from {fromPlace.name} to {continent.name}</h2>
                    )}
                    <p className=" sectionTitle__text mt-5 sm:mt-0">
                        Find affordable flights and uncover hidden gems across {continent.name} with our curated list of cheap travel destinations
                    </p>
                </div>
            </div>
        </div>
    )
}
  
export default Description