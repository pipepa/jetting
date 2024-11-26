import Link from "next/link"
import { usePathname } from "next/navigation"
import useMenu from "@/hooks/useMenu"
import { mainMenu as mainMenuData } from "@/data/menu"

const MainMenu = ({ style = "" }) => {
  const pathname = usePathname()
  const mainMenu = useMenu({ menu: mainMenuData })

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>

        {mainMenu.map((item, index) => {
          return (
            <li className={pathname === item.link ? "current" : ""} key={index}>
              <div className="d-flex align-items-center">
                {pathname === item.link ? (
                  <div className="link">
                    {item.title}
                  </div>
                ) : (
                  <Link
                    className="link"
                    href={item.link}
                    target={item.openInNewTab ? '_blank' : '_self'}
                    rel={item.rel ? Object.keys(item.rel).filter(key => item.rel[key]).join(' ') : ''}
                  >
                    {item.title}
                  </Link>
                )}
                {item.detail && (
                  <div
                    className="pl-5 position-absolute"
                    style={{right: '0', top: '13px' }}
                  >
                    <div
                      className={`text-12 lh-15 fw-600 flex-center text-center ${item.detailClassName}`}
                      style={{ padding: '1px 5px', minWidth: '22px' }}
                    >
                      <span>{item.detail}</span>
                    </div>
                  </div>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </nav>
  );
};

export default MainMenu;
