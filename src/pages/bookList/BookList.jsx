import React, { useEffect, useState } from "react";
import { getReadItem } from "../..";
import { wishItem } from "../../wish";
import SectionTitle from './../../components/SectionTitle/SectionTitle';
import Sorting from './../../components/Sorting/Sorting';
import Book from "../../components/Book/Book";

const BookList = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [displayBook, setDisplayBook] = useState([]);
  const [sortedDisplay, setSortedDisplay]=useState([]);
  const readBook = getReadItem();
  const wishList= wishItem();
  console.log("display",displayBook);
  useEffect(()=>{
    if(tabIndex==0){
      setDisplayBook(readBook);
    }
    else if(tabIndex==1){
      setDisplayBook(wishList);
    }  
},[tabIndex]);

const handleSorted=value=>{
  if (value =='rating'){
     const sortedRating= displayBook.sort((a, b) => b.rating - a.rating);
    setSortedDisplay(sortedRating);
     
  }
  if (value =='page'){
    const sortedPage=displayBook.sort((a, b) => b.totalPages - a.totalPages);
    setSortedDisplay(sortedPage);
    
  }
  else if(value == 'publisherYear'){
        const sortedYear=displayBook.sort((a,b)=> b.yearOfPublishing - a.yearOfPublishing)
        setSortedDisplay(sortedYear);
  }
}
 
  return (
    <div>
      {/* section title */}
      <div className="bg-[#F3F3F3] py-2 md:py-5 w-full rounded-lg">
        <SectionTitle title="Books"></SectionTitle>
      </div>
      {/* sorting */}
      <div className="flex justify-center mt-5">
        <Sorting handleSorted={handleSorted}></Sorting>
      </div>
      {/* book list tab */}
      <div className="mt-10 md:mt-32">
        <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
          <button
            onClick={() => setTabIndex(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 0 ? "border-b-0 text-green-500 border" : "border-b-2"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
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
            <span onClick={() => handleReadBook()}>Read Book</span>
          </button>
          <button
            onClick={() => setTabIndex(1)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 1 ? "border-b-0 text-green-500 border" : "border-b-2"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
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
      {/* display book list */}
      <div className="mt-5">
          {
            displayBook.map(book=><Book keys={book.bookId} book={book}></Book>)
          }
      </div>
    </div>
  );
}
export default BookList;
