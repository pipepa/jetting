
'use client'

import React, { useState, useEffect } from 'react';

const HelpfulFeedback = ({ id }) => {
  const storageKey = `feedback_${id}`;
  const [isHelpfulClicked, setIsHelpfulClicked] = useState(false);
  const [isNotHelpfulClicked, setIsNotHelpfulClicked] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const storedFeedback = localStorage.getItem(storageKey);
    if (storedFeedback) {
      setFeedback(storedFeedback);
      if (storedFeedback === 'helpful') {
        setIsHelpfulClicked(true);
      } else if (storedFeedback === 'notHelpful') {
        setIsNotHelpfulClicked(true);
      }
    }
  }, []);

  const handleHelpfulClick = () => {
    if (isHelpfulClicked) {
      setIsHelpfulClicked(false);
      setFeedback('');
      localStorage.removeItem(storageKey);
    } else {
      setIsHelpfulClicked(true);
      setIsNotHelpfulClicked(false);
      setFeedback('helpful');
      localStorage.setItem(storageKey, 'helpful');
    }
  };

  const handleNotHelpfulClick = () => {
    if (isNotHelpfulClicked) {
      setIsNotHelpfulClicked(false);
      setFeedback('');
      localStorage.removeItem(storageKey);
    } else {
      setIsHelpfulClicked(false);
      setIsNotHelpfulClicked(true);
      setFeedback('notHelpful');
      localStorage.setItem(storageKey, 'notHelpful');
    }
  };

  return (
    <div className="helpful-not-helpful-container">
      <div className="d-flex x-gap-10 items-center text-10 mt-10">
        <button
          className={`helpful d-flex items-center text-dark-3 ${isHelpfulClicked ? 'active' : ''}`}
          onClick={handleHelpfulClick}
        >
          <i className="icon-like mr-5" />
          Helpful
        </button>
        <button
          className={`helpful d-flex items-center text-dark-3 ${isNotHelpfulClicked ? 'active' : ''}`}
          onClick={handleNotHelpfulClick}
        >
          <i className="icon-dislike mr-5" />
          Not helpful
        </button>
      </div>
      <div className="feedback-message">
        {feedback === 'notHelpful' || feedback === 'helpful' ? 'Thanks!' : 'Your feedback is important to us.'}
      </div>
    </div>
  );
};

export default HelpfulFeedback;
