import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
//import './styles/Header.css'

const navbarGlass = {
  backdropFilter: "blur(9px) saturate(100%)",
  WebkitBackdropFilter: "blur(9px) saturate(100%)",
  backgroundColor: "rgba(39, 39, 39, 0)",
};
const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const handleMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <>
      <div
        className="container-header flex flex-row h-20 fixed left-0 right-0 z-50"
        style={navbarGlass}
      >
        <Link href="/">
          <div className="fmcw-logo-header place-self-center z-100"></div>
        </Link>
        <div className="links-container-header flex justify-end flex-row basis-5/6">
          <Link
            href="/comingsoon"
            className="nav-menu links-header w-24 place-self-center"
          >
            events
          </Link>
          <Link
            href="/comingsoon"
            className="nav-menu links-header w-24 place-self-center "
          >
            sponsors
          </Link>
          <Link
            href="/comingsoon"
            className="nav-menu links-header w-24 place-self-center "
          >
            glimpses
          </Link>
          <Link
            href="/comingsoon"
            className="nav-menu links-header w-24 place-self-center"
          >
            team
          </Link>
          <Link
            href="/"
            className=" links-header w-auto pr-4 place-self-center"
          >
            <button onClick={handleMenu}>
              {menuState ? null : (
                <div className="menu-link space-y-1">
                  <div className="w-8 h-0.5 bg-white"></div>
                  <div className="w-8 h-0.5 bg-white"></div>
                  <div className="w-8 h-0.5 bg-white"></div>
                </div>
              )}
            </button>

            {menuState ? (
              <div className="menu-design">
                <Link href="/">
                  <div className="fmcw-logo-header basis-1/6 place-self-center z-100"></div>
                </Link>
                <div className="list">
                  <Link href="/" className="menu-list">
                    events
                  </Link>
                  <Link href="/comingsoon" className="menu-list">
                    sponsors
                  </Link>
                  <Link href="/comingsoon" className="menu-list">
                    glimpses
                  </Link>
                  <Link href="/comingsoon" className="menu-list">
                    team
                  </Link>
                </div>
              </div>
            ) : null}
          </Link>
          {menuState ? (
            <button onClick={handleMenu}>
              <Image
                className="cross-cut"
                alt="cross-cut"
                src={require("./../../../public/crosscut.png")}
              ></Image>
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Header;
