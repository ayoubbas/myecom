// import React from "react";
// import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";

// const Header = () => {
//   return (
//     <header className="@container p-2 bg-red-700">
//       <div className="@container  mx-auto ">
//         <div className="@xs:flex-col flex justify-between  items-center @xs:items-start  h-10">
//           <div className="">
//             <h2>MyEcomerc</h2>
//             <nav>
//               <ul className="flex gap-4 @xs:flex-col">
//                 <li>
//                   <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                   <Link to="/contact">Contact</Link>
//                 </li>
//                 <li>
//                   <Link to="/about">About</Link>
//                 </li>
//                 <li>
//                   <Link to="/signup">Sing Up</Link>
//                 </li>
//               </ul>
//             </nav>
//           </div>

//           <div className="bars">
//             <FaBars />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
// import React, { useState } from "react";
// import {
//   FaSearch,
//   FaHeart,
//   FaShoppingCart,
//   FaUser,
//   FaBars,
// } from "react-icons/fa";
// import { IoClose } from "react-icons/io5";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [faBarOpen, setFabarOpen] = useState(false);
//   return (
//     <header className="bg-white shadow-md w-full  fixed top-0 left-0">
//       <div
//         className={` md:container mx-auto px-4 sm:flex-col    py-2 flex justify-between items-center`}
//       >
//         {/* Logo */}
//         <div className="text-2xl font-bold">Exclusive</div>

//         {/* Navigation Links */}
//         <nav className={`${!faBarOpen && "flex"} sm:hidden   sm:mt-4`}>
//           <ul
//             className={`flex lg:items-center lg:space-x-4 sm:space-y-4 sm:flex-col sm:items-start`}
//           >
//             <li>
//               <Link to="/" className="text-gray-600 hover:text-black underline">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" className="text-gray-600 hover:text-black ">
//                 Contact
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className="text-gray-600 hover:text-black ">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link to="/signup" className="text-gray-600 hover:text-black ">
//                 Sing Up
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         {/* Search Input and Icons */}
//         <div
//           className={`${
//             !faBarOpen && "hidden"
//           } items-center sm:mt-4 sm:mb-4 md:flex `}
//         >
//           {/* <div className={` mr-3  flex`}></div> */}
//           <div className={`flex space-x-4`}>
//             <div class="flex items-center space-x-4">
//               <button className="text-gray-600 bg-gray-100 rounded-full  p-2  hover:text-black">
//                 <FaSearch />
//               </button>
//               <button class="text-gray-600 hover:text-black relative">
//                 <FaHeart />
//                 <span class="absolute -top-3 -right-2 bg-red-500 text-white rounded-full px-1 py-0 text-[10px] ">
//                   3
//                 </span>
//               </button>
//               <button class="text-gray-600 hover:text-black relative">
//                 <FaShoppingCart />
//                 <span class="absolute -top-3 -right-2 bg-red-500 text-white rounded-full px-1 py-0 text-[10px]">
//                   7
//                 </span>
//               </button>
//               <button className="text-gray-600 hover:text-black">
//                 <FaUser />
//               </button>
//             </div>
//             {/* i can put here a condition statment to handle if the user login or not */}
//           </div>
//         </div>
//         <div
//           className={`${
//             faBarOpen && ""
//           } md:hidden absolute top-5 right-5 text-gray-600  hover:text-black `}
//         >
//           {faBarOpen ? (
//             <IoClose onClick={() => setFabarOpen(!faBarOpen)} />
//           ) : (
//             <FaBars onClick={() => setFabarOpen(!faBarOpen)} />
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from "react";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaBars,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [faBarOpen, setFabarOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto  md:px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Exclusive
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-6">
            <li>
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
            </li>
            <li>
              <Link to="/signup" className="text-gray-600 hover:text-gray-900">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>

        {/* Search Input and Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <button className="text-gray-600 bg-gray-100 rounded-full p-2 hover:text-gray-900 focus:outline-none">
              <FaSearch />
            </button>
          </div>
          <button className="text-gray-600 hover:text-gray-900 relative">
            <FaHeart />
            <span className="absolute -top-3 -right-2 bg-red-500 text-white rounded-full px-1 py-0 text-[10px]">
              3
            </span>
          </button>
          <button className="text-gray-600 hover:text-gray-900 relative">
            <FaShoppingCart />
            <span className="absolute -top-3 -right-2 bg-red-500 text-white rounded-full px-1 py-0 text-[10px]">
              7
            </span>
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <FaUser />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none "
          onClick={() => setFabarOpen(!faBarOpen)}
        >
          {faBarOpen ? <IoClose /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-[300px] h-full bg-slate-200 z-20 ${
            faBarOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col space-y-4 mt-[40px]  ">
            <li>
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 block"
                onClick={() => setFabarOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-gray-900 block"
                onClick={() => setFabarOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-600 hover:text-gray-900 block"
                onClick={() => setFabarOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="text-gray-600 hover:text-gray-900 block"
                onClick={() => setFabarOpen(false)}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
