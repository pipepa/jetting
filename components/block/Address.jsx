const Address = () => {
  const addressContent = [
    {
      id: 1,
      colClass: "col-lg-3",
      title: "Our registration address",
      content: (
        <>71-75 Shelton Street, London WC2H 9JQ, United Kingdom</>
      ),
    },
    {
      id: 2,
      colClass: "col-auto",
      title: "Customer Support",
      content: (
        <>
          <a href="mailto:info@jetting.com">info@jetting.com</a>
        </>
      ),
    },
    {
      id: 3,
      colClass: "col-auto",
      title: "Partner Contact",
      content: (
        <>
          {" "}
          <a href="mailto:partner@jetting.com">partner@jetting.com</a>
        </>
      ),
    },
  ];
  return (
    <>
      {addressContent.map((item) => (
        <div className={`${item.colClass}`} key={item.id}>
          <div className="text-14 text-light-1">{item.title}</div>
          <div className="text-18 fw-500 mt-10">{item.content}</div>
        </div>
      ))}
    </>
  );
};

export default Address;
