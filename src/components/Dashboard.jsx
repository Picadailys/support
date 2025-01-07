/* eslint-disable react/no-unknown-property */
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { Logout } from "@carbon/icons-react";
import FullLogo from "../assets/images/full-logo.png";
import Settings from "./custom-icons/Settings";
import Bell from "./custom-icons/Bell";
import React, { useState } from "react";
import SupportIcon from "./custom-icons/SupportIcon";
import ChevronDown from "./custom-icons/ChevronDown";
import Envelope from "./custom-icons/Envelope";

const Dashboard = () => {
    const menuItems = [
        {
            title: 'Support',
            isLink: false,
            icon: <SupportIcon />,
            icon2: <ChevronDown />,
            dropdown: true,
            subItems: [
                { name: 'Dashboard', link: '/', customStyle: 'grey-color' },
                { name: 'Channel', link: '/channel', customStyle: 'grey-color' },
                { name: 'Tickets', link: '/tickets', customStyle: 'grey-color' },
                { name: 'Chat Bot', link: '/chat/bot', customStyle: 'grey-color' },
            ],
        },
        {
            title: 'Settings',
            isLink: true,
            customStyle: 'grey-color',
            icon: <Settings />,
            link: '/settings',
            dropdown: false,
        },
    ];

    // Dropdown state for the "Support" menu
    const [isSupportOpen, setIsSupportOpen] = useState(true);

    // Toggle dropdown
    const toggleDropdown = () => {
        setIsSupportOpen(!isSupportOpen);
    };

    return (
        <>
            <section className="xui-dashboard ghost-dashboard open-sans-custom">
                <div className="navigator xui-text-white">
                    <div className="brand xui-px-1-half xui-py-half grey-bg">
                        <div className="maxified xui-d-flex xui-flex-ai-center">
                            <a href="./" className="xui-text-inherit xui-text-dc-none xui-font-w-bold">
                                <img src={FullLogo} alt="Hensard Logo" className='xui-img-150' />
                            </a>
                        </div>
                    </div>
                    <div className="links xui-pt-3">
                        <div className='xui-d-flex xui-flex-ai-center'>
                            <img className='xui-w-50 xui-h-50 xui-bdr-rad-circle xui-bdr-white xui-bdr-w-2 xui-bdr-s-solid' src={`https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg?semt=ais_hybrid`} alt="" />
                            <div className='xui-pl-half' style={{width: 'calc(100% - 50px)'}}>
                                <h3 className='xui-font-sz-110'>Sim Batista</h3>
                                <p className='xui-opacity-7 xui-mt-half xui-font-sz-75 xui-d-flex xui-flex-ai-center xui-grid-gap-half'>Super Admin <span style={{width: '2px', height: '2px'}} className='xui-d-inline-block xui-bg-white xui-bdr-rad-circle'></span> <span className='xui-font-sz-70'>Available</span> </p>
                            </div>
                        </div>
                        {menuItems.map((item, index) => (
                            <div key={index} className="xui-mt-2 xui-mb-2 xui-font-sz-85">
                                {item.isLink ? (
                                    <NavLink to='/' className={`${item.customStyle} xui-text-dc-none xui-d-flex xui-flex-jc-space-between xui-flex-ai-center`} onClick={item.dropdown ? toggleDropdown : undefined}>
                                        <div className="xui-d-flex xui-flex-ai-center xui-grid-gap-1">
                                            <span>{item.icon}</span>
                                            <span>{item.title}</span>
                                        </div>
                                        <div className="icon">{item.icon2}</div>
                                    </NavLink>
                                ) : (
                                    <div className={`${item.customStyle} xui-d-flex xui-cursor-pointer xui-flex-jc-space-between xui-flex-ai-center`} onClick={item.dropdown ? toggleDropdown : undefined}>
                                        <div className="xui-d-flex xui-flex-ai-center xui-grid-gap-1">
                                            <span>{item.icon}</span>
                                            <span>{item.title}</span>
                                        </div>
                                        <div className="icon">{item.icon2}</div>
                                    </div>
                                )}
                                {/* Dropdown menu */}
                                {item.dropdown && isSupportOpen && (
                                    <div className='xui-px-1-half sub-link-box'>
                                        {item.subItems.map((subItem, subIndex) => (
                                            <NavLink key={subIndex} to={subItem.link} className={`link-box xui-p-half ${({ isActive }) => isActive ? 'active-link' : 'grey-color'}`}>
                                                <>
                                                    <div className="name xui-ml-half">
                                                        <span>{subItem.name}</span>
                                                    </div>
                                                </>
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <div className="bottom-fixed">
                            <div className="link-box xui-px-1-half xui-cursor-pointer xui-font-sz-85">
                                <div className="icon">
                                    <Logout size={22.4} color="currentColor" />
                                </div>
                                <div className="name xui-ml-half">
                                    <span>Log out</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="screen" xui-aside="false" xui-navbar="false">
                    <div className='content'>
                        <nav className="xui-navbar xui-d-flex xui-flex-ai-center xui-flex-jc-space-between grey-bg xui-px-1 xui-md-px-2">
                            <h3 className="xui-font-sz-120 ">Support</h3>
                            <div className="xui-d-flex xui-flex-ai-center xui-grid-gap-1-half">
                                <Link to={'/dashboard'} className="xui-d-inline-block"><Envelope /></Link>
                                <Link to={'/dashboard'} className="xui-d-inline-block"><Bell /></Link>
                            </div>
                            <div className="menu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </nav>
                        <section className="xui-lg-mt-2 xui-px-1 xui-md-px-1 xui-mt-none">
                            <Outlet />
                        </section>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Dashboard;
