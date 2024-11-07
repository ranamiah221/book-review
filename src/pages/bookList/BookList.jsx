import React, { useState } from "react";
import SectionTitle from "./../../components/SectionTitle/SectionTitle";
import { IoIosArrowDown } from "react-icons/io";
import Sorting from "../../components/Sorting/Sorting";
import { getReadItem } from "../..";
const BookList = () => {
    const [isActive, setIsActive]=useState(true);
    const handleActive=()=>{
      setIsActive(!isActive) 
    }
    const book=getReadItem();
    console.log(book);
  return (
    <div>
      {/* section title */}
      <div className="bg-[#F3F3F3] py-2 md:py-5 w-full rounded-lg">
        <SectionTitle title="Books"></SectionTitle>
      </div>
      {/* sorting */}
      <div className="flex justify-center mt-5">
        <Sorting></Sorting>
      </div>
      {/* book list tab */}
      <div className="mt-10 md:mt-32">
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800">
          <button
            onClick={()=>handleActive()}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 dark:border-gray-600 dark:text-gray-600 ${isActive ? "border-b-0 border": "border-b"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Read Book</span>
          </button>
          <button
           onClick={()=>handleActive()}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 dark:border-gray-600 dark:text-gray-600 ${ !isActive ? "border-b-0 border": "border-b"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Wishlist Book</span>
          </button>
         
         
        </div>
      </div>
    </div>
  );
};

export default BookList;
