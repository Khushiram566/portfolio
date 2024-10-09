import React, { useState } from 'react'
import dp from '../../../public/photo.avif'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
const Navbar = () => {
    const [menu,setMenu]=useState(false)
    const navItems = [
      {
        id: "1",
        name: "Home",
      },
      {
        id: "2",
        name: "About",
      },
      {
        id: "3",
        name: "Skills",
      },
      {
        id: "4",
        name: "Projects",
      },
      {
        id: "5",
        name: "Contact us",
      }
    ];
  return (
    <>
      <div className="flex shadow-md p-2">
        {/* for left */}
        <div className="flex ">
          <img
            src={dp}
            alt=""
            className=" h-[44px] w-[44px] ml-3 mr-2 mt-3 rounded-2xl"
          />
          <p className="font-bold space-y-0 ">
            Khushi<span className="font-bold text-3xl text-blue-700  ">R</span>
            am
            <br />
            <h4 className="text-[11px] text-center">Web Developer</h4>
          </p>
        </div>

        {/* for right */}
        <div className="ml-auto mr-6 mt-4">
          <ul className="flex space-x-9  ">
            {navItems.map((item) => (
              <li className="cursor-pointer hover:scale-95 hover:text-slate-700">
                <a key={item.id} href="">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          
        </div>

        {/* for phones */}
        {/* {menu && <div></div>} */}
      </div>
    </>
  );
}

export default Navbar
