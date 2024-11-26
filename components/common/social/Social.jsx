const Social = () => {
  const socialContent = [
    { id: 1, icon: "icon-instagram", link: "https://instagram.com/jetting_com" },
    { id: 2, icon: "icon-facebook", link: "https://facebook.com/jettingcom" },
    // { id: 3, icon: "icon-twitter", link: "https://twitter.com/" },
    // { id: 4, icon: "icon-linkedin", link: "https://linkedin.com/" },
  ];
  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="nofollow noopener noreferrer"
          key={item.id}
        >
          <i className={`${item.icon} text-14`} />
        </a>
      ))}
    </>
  );
};

export default Social;
