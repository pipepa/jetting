import { hotelsDefaultLink } from "@/data/expedia"

export const footerContent = [
  {
    id: 1,
    title: "Company",
    menuList: [
      {
        title: "About Us",
        link: "/about",
        openInNewTab: true,
      },
      {
        title: "Jetting.com Blog",
        link: "https://blog.jetting.com",
        openInNewTab: true,
      },
      {
        title: "Terms of Use",
        link: "/terms",
        openInNewTab: true,
      },
      {
        title: "Privacy Policy",
        link: "/terms#privacy_policy",
        openInNewTab: true,
      },
      // { title: "Cookie Policy", link: "/terms#cookie_policy" },
      {
        title: "Best Price Guarantee",
        link: "/terms#best_price_guarantee",
        openInNewTab: true,
      },
      {
        title: "Contact",
        link: "/contact",
        openInNewTab: true,
      },
    ],
  },
  {
    id: 2,
    title: "Services",
    menuList: [
      {
        title: "Flights",
        link: "/flights",
        openInNewTab: true,
      },
      {
        title: "Hotels",
        link: hotelsDefaultLink.affiliateLink,
        rel: { nofollow: true, noopener: true, noreferrer: true },
        openInNewTab: true,
      },
      {
        title: "Last Minute Deals",
        link: "/#last_minute_deals",
        openInNewTab: true,
      },
      {
        title: "Cruises",
        link: "https://www.kqzyfj.com/click-101112083-10493749",
        rel: { nofollow: true, noopener: true, noreferrer: true },
        openInNewTab: true,
      },
      // { title: "Cars", link: "/cars" },
      {
        title: "Events",
        link: "/events",
        openInNewTab: true,
      },
    ],
  },
  {
    id: 3,
    title: "Destinations",
    menuList: [
      {
        title: "North America",
        link: "/destinations/north-america",
        openInNewTab: true,
      },
      {
        title: "South America",
        link: "/destinations/south-america",
        openInNewTab: true,
      },
      {
        title: "Europe",
        link: "/destinations/europe",
        openInNewTab: true,
      },
      // { title: "Middle East", link: "/destinations/middle-east" },
      {
        title: "Africa",
        link: "/destinations/africa",
        openInNewTab: true,
      },
      {
        title: "Asia",
        link: "/destinations/asia",
        openInNewTab: true,
      },
      {
        title: "Australia and Oceania",
        link: "/destinations/australia-and-oceania",
        openInNewTab: true,
      },
    ],
  },
]
