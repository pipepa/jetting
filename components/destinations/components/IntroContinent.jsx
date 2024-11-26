'use client'

import { useState } from 'react';

const IntroContinent = ({ intro }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  const visibleText = isExpanded ? intro.text : intro.text.split('<!--DIVIDER-->')[0];
  const hiddenText = intro.text.split('<!--DIVIDER-->')[1];

  return (
    <>
      <div className="col-xl-12">
        <h2>{intro.title}</h2>
      </div>
      <div className={`col-xl-12 mt-20 ${isExpanded ? '' : 'collapsed'}`}>
        <div className="y-gap-30" dangerouslySetInnerHTML={{ __html: visibleText }}></div>
        {!isExpanded && (
          <>
            <div className="collapsed-divider"></div>
            <div className="d-none" dangerouslySetInnerHTML={{ __html: hiddenText }}></div>
          </>
        )}
        <button
          className="d-block fw-500 underline uppercase mt-40"
          onClick={toggleCollapse}
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      </div>
      {/* End .col */}
    </>
  );
};

export default IntroContinent;
