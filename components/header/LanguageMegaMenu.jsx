
'use client'

// import Image from "next/image";
import { useState } from "react";

const LanguageMegaMenu = ({ textClass }) => {
  const [click, setClick] = useState(false);
  const handleLanguage = () => setClick((prevState) => !prevState);

  const languageContent = [
    { id: 1, language: "English", native: "English", status: "active" },
    { id: 2, language: "Spanish", native: "Español", status: "disabled" },
    { id: 3, language: "French", native: "Français", status: "disabled" },
    { id: 4, language: "Arabic", native: "العربية", status: "disabled" },
    { id: 5, language: "German", native: "Deutsch", status: "disabled" },
    { id: 6, language: "Turkish", native: "Türkçe", status: "disabled" },
    { id: 7, language: "Italian", native: "Italiano", status: "disabled" },
    { id: 8, language: "Ukrainian", native: "Українська", status: "disabled" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languageContent[0]);

  const handleItemClick = (item) => {
    setSelectedLanguage(item);
    setClick(false);
  };

  return (
    <>
      {/* Start language Language Selector */}
      <div className="col-auto">
        <button
          className={`d-flex items-center text-14 ${textClass}`}
          onClick={handleLanguage}
        >

          <i className="icon icon-globe text-16 mr-5" />

          {/*<Image
            width={20}
            height={20}
            src={`/img/lang/${selectedLanguage.src}`}
            alt={`${selectedLanguage.language}`}
            className="rounded-full mr-10"
          />*/}
          <span className="js-language-mainTitle">
            {" "}
            {selectedLanguage.native}
          </span>
        </button>
      </div>
      {/* End language Language Selector */}

      <div className={`langMenu js-langMenu ${click ? "" : "is-hidden"}`}>
        <div className="languageMenu__bg" onClick={handleLanguage}></div>
        <div className="langMenu__content bg-white rounded-22">
          <div className="d-flex items-center justify-between px-30 py-20 sm:px-15 border-bottom-light">
            <div className="text-20 fw-500 lh-15">Select your language</div>
            {/* End title */}
            <button className="pointer" onClick={handleLanguage}>
              <i className="icon-close" />
            </button>
            {/* End colse button */}
          </div>
          {/* Emd flex-wrapper */}
          <ul className="modalGrid px-30 py-30 sm:px-15 sm:py-15">
            {languageContent.map((item) => (
              <li
                className={`modalGrid__item js-item ${selectedLanguage.native === item.native ? "active" : ""} ${item.status === "disabled" ? "disabled" : ""}`}
                key={item.id}
                onClick={item.status === "disabled" ? null : () => handleItemClick(item)}
              >
                <div className="py-10 px-15 sm:px-5 sm:py-5">
                  <div className="text-15 lh-15 fw-500 text-dark-1">
                    {item.language}
                  </div>
                  <div className="text-14 lh-15 mt-5 js-title">
                    {item.native}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* End langMenu */}
      </div>
    </>
  );
};

export default LanguageMegaMenu;
