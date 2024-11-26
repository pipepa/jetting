
'use client'

import { useState } from "react";

const CurrencyMegaMenu = ({ textClass }) => {
  const [click, setClick] = useState(false);
  const handleCurrency = () => setClick((prevState) => !prevState);

  const currencyContent = [
    { id: 1, name: "United States Dollar", currency: "USD", symbol: "$", status: "active" },
    { id: 2, name: "Euro", currency: "EUR", symbol: "€", status: "disabled" },
    { id: 3, name: "British Pound", currency: "GBP", symbol: "£", status: "disabled" },
    { id: 4, name: "Mexican Peso", currency: "MXN", symbol: "$", status: "disabled" },
    { id: 5, name: "Australian Dollar", currency: "AUD", symbol: "$", status: "disabled" },
    { id: 6, name: "Brazilian Real", currency: "BRL", symbol: "R$", status: "disabled" },
    { id: 7, name: "Canadian Dollar", currency: "CAD", symbol: "$", status: "disabled" },
    { id: 8, name: "Indian Rupee", currency: "INR", symbol: "₹", status: "disabled" },
    { id: 9, name: "Chinese Yuan", currency: "CNY", symbol: "¥", status: "disabled" },
    { id: 10, name: "Japanese Yen", currency: "JPY", symbol: "¥", status: "disabled" },
    { id: 11, name: "South Korean Won", currency: "KRW", symbol: "₩", status: "disabled" },
    { id: 12, name: "Swedish Krona", currency: "SEK", symbol: "kr", status: "disabled" },
    { id: 13, name: "Turkish Lira", currency: "TRY", symbol: "₺", status: "disabled" },
    { id: 14, name: "Ukrainian Hryvnia", currency: "UAH", symbol: "₴", status: "disabled" }

  ];

  const [selectedCurrency, setSelectedCurrency] = useState(currencyContent[0]);

  const handleItemClick = (item) => {
    setSelectedCurrency(item);
    setClick(false);
  };

  return (
    <>
      {/* Start currencty dropdown wrapper */}
      <div className="col-auto">
        <button
          className={`d-flex items-center text-14 ${textClass}`}
          onClick={handleCurrency}
        >
          <span className="js-currencyMenu-mainTitle">
            {selectedCurrency.currency}
          </span>
        </button>
      </div>
      {/* End currencty dropdown wrapper */}

      <div
        className={`currencyMenu js-currencyMenu ${click ? "" : "is-hidden"}`}
      >
        <div className="currencyMenu__bg" onClick={handleCurrency}></div>
        <div className="currencyMenu__content bg-white rounded-22">
          <div className="d-flex items-center justify-between px-30 py-20 sm:px-15 border-bottom-light">
            <div className="text-20 fw-500 lh-15">Select your currency</div>
            {/* End Title */}

            <button className="pointer" onClick={handleCurrency}>
              <i className="icon-close" />
            </button>
            {/* End colse button */}
          </div>
          {/* End flex wrapper */}
          <ul className="modalGrid px-30 py-30 sm:px-15 sm:py-15">
            {currencyContent.map((item) => (
              <li
                className={`modalGrid__item js-item ${selectedCurrency.currency === item.currency ? "active" : ""
                } ${item.status === "disabled" ? "disabled" : ""}`}
                key={item.id}
                onClick={item.status === "disabled" ? null : () => handleItemClick(item)}
              >
                <div className="py-10 px-15 sm:px-5 sm:py-5">
                  <div className="text-15 lh-15 fw-500 text-dark-1">
                    {item.name}
                  </div>
                  <div className="text-14 lh-15 mt-5">
                    <span className="js-title">{item.currency}</span> / {" "}
                    {item.symbol}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CurrencyMegaMenu;
