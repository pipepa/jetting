'use client';

// import { useState, useEffect } from 'react'

const TabsSearchForm = () => {
  return null

  // const [selectedTab, setSelectedTab] = useState(1); // Default tab selection
  // const [isSmallScreen, setIsSmallScreen] = useState(false); // Track screen size

  // const tabsOptions = [
  //   { id: 1, iconClass: "icon-airplane", label: "flights", link: "" },
  //   { id: 2, iconClass: "icon-bed", label: "hotels", link: "" },
  //   { id: 3, iconClass: "icon-tickets", label: "flights+hotels", link: "" },
  //   { id: 4, iconClass: "icon-transmission", label: "ai-travel", link: "" }
  // ];

  // // Detect if the screen is small (<= 576px)
  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsSmallScreen(window.innerWidth <= 576);
  //   };

  //   handleResize(); // Check initially
  //   window.addEventListener('resize', handleResize);

  //   return () => window.removeEventListener('resize', handleResize);
  // }, [])

  // const handleTabChange = (id) => {
  //   setSelectedTab(id);
  // };

  // // Calculate the left position of the indicator based on screen size
  // const calculateIndicatorPosition = () => {
  //   const tabWidth = isSmallScreen ? `calc(100vw / ${tabsOptions.length} - 10px)` : '130px';
  //   return `calc(${tabWidth} * ${selectedTab - 1} + 2px)`;
  // };

  // return (
  //   <div className="row">
  //     <div className="col-auto">
  //       <div className="tab-container mt-40">
  //         {tabsOptions.map((option) => (
  //           <div key={option.id}>
  //             <input
  //               type="radio"
  //               name="tab"
  //               id={`tab${option.id}`}
  //               className={`tab tab--${option.id}`}
  //               checked={selectedTab === option.id}
  //               onChange={() => handleTabChange(option.id)}
  //             />
  //             <label
  //               className="tab_label"
  //               htmlFor={`tab${option.id}`}
  //             >
  //               {/* Show icon on mobile and label on desktop */}
  //               <span className="icon text-15 d-none sm:d-block">
  //                 <i className={option.iconClass}></i>
  //               </span>
  //               <span className="label-text sm:d-none">
  //                 {option.label.toUpperCase()}
  //               </span>
  //             </label>
  //           </div>
  //         ))}
  //         <div
  //           className="indicator"
  //           style={{ left: calculateIndicatorPosition() }}
  //         ></div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default TabsSearchForm;
