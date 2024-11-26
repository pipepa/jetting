import { hotelsDefaultLink } from "@/data/expedia"

export const mainMenu = [
    {
        title: 'Flights',
        link: '/flights',
        openInNewTab: true
    },
    {
        title: 'Hotels',
        link: hotelsDefaultLink.affiliateLink,
        openInNewTab: true,
        rel: {nofollow: true, noopener: true, noreferrer: true}
    },
    {
        title: 'Last minute Deals',
        detail: '7',
        detailClassName: 'border-white-1 bg-green-4 text-white rounded-8',
        link: '/#last_minute_deals',
    },
    {
        title: 'Cruises',
        link: 'https://www.kqzyfj.com/click-101112083-10493749',
        openInNewTab: true,
        rel: {nofollow: true, noopener: true, noreferrer: true}
    },
    {
        title: 'Destinations',
        link: '/destinations',
        openInNewTab: true
    },
    {
        title: 'Events',
        detail: "\u00A0soon 🤟",
        detailClassName: 'bg-info-1 text-dark rounded-8',
        link: '/events',
        openInNewTab: true
    },
]