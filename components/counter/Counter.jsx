const Counter = () => {
  const blockContent = [
    {
      id: 1,
      number: "1 200 +",
      meta: "Travel providers",
      hasUnit: "",
      delayAnim: "100",
    },
    {
      id: 2,
      number: "90 000 +",
      meta: "Flights worldwide",
      hasUnit: "",
      delayAnim: "200",
    },
    {
      id: 3,
      number: "400 000 +",
      meta: "Hotels worldwide",
      hasUnit: "",
      delayAnim: "300",
    },
    {
      id: 4,
      number: "20 000 +",
      meta: "Cruises worldwide",
      hasUnit: "",
      delayAnim: "400",
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-xl-3 col-6"
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnim}
        >
          <div className="text-40 lg:text-30 lh-13 fw-600">
            {item.number}
            {item.hasUnit}
          </div>
          <div className="text-14 lh-14 text-light-1 mt-5">{item.meta}</div>
        </div>
      ))}
    </>
  );
};

export default Counter;
