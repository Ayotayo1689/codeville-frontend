import React from "react";
import { SidebarData, MobileSidebarData } from "./data";
import Link from "next/link";

export function CareersSidebar() {
  return (
    <>
      <ul className="careers-list-content">
        {SidebarData.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.link}>
                <span>{item.title}</span>
                <p className="careers-list-content-icon">{item.icon}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}





export function MobileSidebar() {
    return (
        <>
            <div className="mobile-careers-list-content">
            <ul >
                {MobileSidebarData.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link href={item.link}>
                                {item.title}

                            </Link>
                        </li>
                    );
                })}
            </ul>
            </div>
        </>
    );
}





