"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const ContactInfo = () => {
  const pathname = usePathname()

  const contactContent = [
    {
      id: 1,
      title: "Sending a message",
      action: "/contact",
      text: "Complete the form",
    },
    {
      id: 2,
      title: "Sending an email",
      action: "mailto:info@jetting.com",
      text: "info@jetting.com",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mt-30" key={item.id}>
          <div className={"text-14 mt-30"}>{item.title}</div>
          {pathname === item.action ? (
            <div>
              {item.text}
            </div>
          ) : (
            <Link 
              href={item.action}
              target="_blank"
              className="text-16 fw-500 text-black mt-5"
            >
              {item.text}
            </Link>
          )}
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
