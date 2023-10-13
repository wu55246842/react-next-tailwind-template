import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import { RiMoonFill, RiSunFill } from "react-icons/ri";

export const navLinks = [
  {
    id: "home",
    title: "Course AI",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "About Us",
  },
];


interface NavLink {
  id: string;
  title: string;
}

const LandingHeader: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  const [darkmode, setDarkmode] = React.useState(document.body.classList.contains('dark'),);
  

  return (
    <nav className='sticky top-0 w-full flex py-6 justify-between items-center navbar'>
      <img src="/img/layout/laowudi_fish.png" alt="Laowudi" className='w-[124px] h-[52px]' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {
          navLinks.map((el: NavLink, index: number) => (
            <li key={el.id} className={`font-bold font-bold transition duration-300 md:mr-10 mr-5
            text-gray-500 hover:text-gray-700 dark:hover:text-white  hover:scale-105`}>
              <a href={`#${el.id}`}>
                {el.title}
              </a>
            </li>
          ))
        }

          <div className="flex grab-5 items-center">
              <button
                className="rounded-xl px-4 py-2 font-bold transition duration-300 bg-white text-black hover:bg-gray-300 hover:text-black  hover:scale-105"
                onClick={(): void => router.push("/auth/sign-in")}>
                Sign  In
              </button>

              {/* <div
                className="cursor-pointer text-gray-600 pl-5"
                onClick={() => {
                  if (darkmode) {
                    document.body.classList.remove('dark');
                    setDarkmode(false);
                  } else {
                    document.body.classList.add('dark');
                    setDarkmode(true);
                  }
                }}
              >
                {darkmode ? (
                  <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
                ) : (
                  <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
                )}
              </div> */}
          </div>
      </ul>
      
      <div className='md:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? '/img/layout/close.svg' : '/img/layout/menu.svg'} alt="menu" className="w-[28px] h-[28px] object-contain"  onClick={()=>setToggle((prev)=>!prev)}/>

        <div className={`${ toggle ? 'flex': 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {
              navLinks.map((el: NavLink, index: number) => (
                <li key={el.id} className={`font-bold font-bold transition duration-300 mr-10
                  text-gray-500 hover:text-gray-700 dark:hover:text-white  hover:scale-105`}>
                  <a href={`#${el.id}`}>
                    {el.title}
                  </a>
                </li>
              ))
            }

              {/* <button
                className="rounded-xl px-4 py-2 font-bold transition duration-300 text-gray-500 hover:text-gray-700 dark:hover:text-white  hover:scale-105"
                onClick={(): void => router.push("/auth/sign-up")}>
                Sign Up
              </button> */}
              <button
                className="rounded-xl px-4 py-2 font-bold transition duration-300 bg-white text-black hover:bg-gray-300 hover:text-black  hover:scale-105"
                onClick={(): void => router.push("/auth/sign-in")}>
                Sign  In
              </button>

              <div
                className="cursor-pointer text-gray-600 pl-5"
                onClick={() => {
                  if (darkmode) {
                    document.body.classList.remove('dark');
                    setDarkmode(false);
                  } else {
                    document.body.classList.add('dark');
                    setDarkmode(true);
                  }
                }}
              >
                {darkmode ? (
                  <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
                ) : (
                  <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
                )}
              </div>
            
          </ul>

          
        </div>
      </div>
    </nav>
  );
};

export default LandingHeader;
