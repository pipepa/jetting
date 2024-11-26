'use client'

import React from 'react'
import Link from "next/link"
import { usePathname } from "next/navigation"

function formatBreadcrumb({ dataArrays, urlSlug }) {
  // Iterate over each data array to find a matching item by slug
  for (let dataArray of dataArrays) {
    const foundItem = dataArray.find(item => item.slug === urlSlug)
    if (foundItem) {
      // Return the name of the found item
      return foundItem.name
    }
  }

  // If no item is found, format the urlSlug to be more readable
  return urlSlug
    .replace(/-/g, ' ') // Replace hyphens with spaces
    .split(' ') // Split the string into an array of words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
    .join(' ') // Join the words back into a single string
}

const TopBreadcrumbs = ({ dataArrays, link }) => {
  const pathname = usePathname()
  const pathnames = pathname.split('/').filter(x => x)

  return (
    <section className="py-10 d-flex items-center bg-light-2">
      <div className="container">
        <div className="row y-gap-10 items-center justify-between">
          <div className="col-auto">
            <div className="row x-gap-10 y-gap-5 items-center text-12 text-light-1">
              <div className="col-auto">
                <Link href="/">Home</Link>
              </div>
              <span className="col-auto">
                &#47;
              </span>
              {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1
                const formattedtext = formatBreadcrumb({ dataArrays, urlSlug: decodeURIComponent(value) })
                const to = `/${pathnames.slice(0, index + 1).join('/')}`

                return last ? (
                  <div key={to} className="col-auto" aria-current="page">
                    <span className='text-dark-1'>{formattedtext}</span>
                  </div>
                ) : (
                  <>
                    <div className="col-auto" key={to}>
                      <Link href={to}>{formattedtext}</Link>
                    </div>
                    <span className="col-auto" key={to + '/'}>
                      &#47;
                    </span>
                  </>
                )
              })}
            </div>
          </div>
          
          {link?.href && link?.text && (
            <div className="col-auto">
              <Link href={`${link.href}`} className="text-14 text-dark-1 underline" target='_blank'>
                {link.text}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TopBreadcrumbs
