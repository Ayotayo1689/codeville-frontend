import React, {useState} from "react";

import {CompanySubMenu, MenuItem, SubMenuItems} from "./dropdownStyle";

const menuItems = [
    {
        id: 1,
        title: "About",
        path: "/about",
        className: "dropdown-link"
    },
    {
        id: 2,
        title: "Careers",
        path: "career/career-opportunities",
        className: "dropdown-link"
    }
    // {
    // 	id: 3,
    // 	title: "Workshops",
    // 	path: "/workshop",
    // 	className: "dropdown-link",
    // },
];

const CompanyDropdown = () => {
    const [dropdown, setDropdown] = useState(false);
    return (
        <div>
            <CompanySubMenu className={dropdown ? "submenu clicked" : "submenu"}>
                {menuItems.map((item, index) => {
                    return (
                        <SubMenuItems key={item}>
                            <MenuItem href={item.path} onClick={() => setDropdown(!dropdown)}>
                                {item.title}
                            </MenuItem>
                        </SubMenuItems>
                    );
                })}
            </CompanySubMenu>
        </div>
    );
};

export default CompanyDropdown;
