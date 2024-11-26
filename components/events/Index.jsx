
'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import eventsData from "../../data/events";
import { continents } from "@/data/skyscannerContinents";

const Index = ({ continent }) => {
  const [filterOption, setFilterOption] = useState(null); // Initially set to null
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (filterOption) {
      setFilteredItems(eventsData.filter(elm => elm.tags?.includes(filterOption)));
    } else {
      setFilteredItems(eventsData); // Display all items when no filter option is selected
    }
  }, [filterOption]);

  const filterOptions = [
    { label: "All", value: null },
    { label: "Art", value: "art" },
    { label: "Sport", value: "sport" },
    { label: "Adventure", value: "adventure" },
    { label: "Music", value: "music" },
    { label: "Festivals", value: "festivals" }, // Changed to lowercase to match data
    // add more options as needed
  ];

  return (
    <>
      <div className="tabs -pills-4 pt-20 js-tabs">
        <div className="tabs__controls row x-gap-10 justify-center js-tabs-controls overflow-visible">
          {filterOptions.map((option) => (
            <div className="col-auto mt-10" key={option.value}>
              <button
                className={`tabs__button text-13 text-dark-1 fw-500 px-16 py-5 rounded-100 w-min-100 js-tabs-button mb-10  px-20 py-5 ${filterOption === option.value ? "is-tab-el-active" : ""}`}
                onClick={() => setFilterOption(option.value)}
              >
                {option.label}
              </button>
            </div>
          ))}
        </div>
        {/* End tab-controls */}

        <div className="row y-gap-30 pt-30">
          {filteredItems.length === 0 ? (
            <div className="col-lg-12 text-center">
              <Image
                src="/img/events/soon.jpg"
                alt="Events Coming Soon"
                width={400}
                height={300}
              />
            </div>
          ) : (
            filteredItems.slice(0, 9).map((item) => (
              <div className="col-lg-4 col-sm-6" key={item.id}>
                <Link
                  href={`/events/${item.slug}`}
                  target="_blank"
                  className="blogCard -type-1 d-block "
                >
                  <div className="blogCard__image">
                    <div className="rounded-8">
                      <Image
                        width={400}
                        height={300}
                        className="cover w-100 img-fluid"
                        src={item.img}
                        alt={item.title}
                      />
                    </div>
                  </div>
                  <div className="pt-20">
                    <h4 className="text-dark-1 text-18 fw-500">{item.title}</h4>
                    <div className="text-light-1 text-15 lh-14 mt-5">
                      {item.date}
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
        {/* End .row */}
      </div>
    </>
  );
};

export default Index;
