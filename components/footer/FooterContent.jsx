"use client"

import Link from "next/link"
import { footerContent } from "@/data/footerContent"
import { usePathname } from "next/navigation"
import useMenu from "@/hooks/useMenu"

const FooterContent = () => {
  const pathname = usePathname()

  return (
    <>
      {footerContent.map((item) => {
        const newMenu = useMenu({ menu: item.menuList })
        return (
          <div className="col-xl-2 col-lg-4 col-sm-6" key={item.id}>
            <h5 className="text-16 fw-500 mb-30">{item.title}</h5>
            <div className="d-flex flex-column">
              {newMenu.map((menu, i) => (
                <div key={i}>
                {pathname === menu.link ? (
                  <div>
                    {menu.title}
                  </div>
                ) : (
                  <Link 
                    href={menu.link}
                    target={menu.openInNewTab ? '_blank' : '_self'}
                    rel={menu.rel ? Object.keys(menu.rel).filter(key => menu.rel[key]).join(' ') : ''}
                  >
                    {menu.title}
                  </Link>
                )}
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </>
  );
};

export default FooterContent;
