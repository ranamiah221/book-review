import { FcBusinessman } from "react-icons/fc";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";
const Book = ({book}) => {
    const {
        bookId,
        bookName,
        author,
        image,
        rating,
        category,
        tags,
        totalPages,
        publisher,
        yearOfPublishing,
      } = book;
    return (
        <div className="grid grid-cols-4 gap-5 p-5 border mb-5 rounded-lg">
           <div className="bg-[#1313130D] col-span-1 flex justify-center items-center rounded-lg">
           <img className="w-32 py-5"
            src={image}
            alt="Movie" />
           </div>
          
        
        <div className="col-span-3">
          <h2 className="text-2xl font-semibold">{bookName}</h2>
          <p><span className="text-base font-medium">By :</span> {author}</p>
          <div className="flex items-center gap-4 mt-5 pb-5">
            <p className="text-base font-bold">Tag </p>
        <button className="rounded-xl bg-[#F3F3F3] px-3 py-1 text-[#23BE0A] font-semibold">
            #{tags[0]}
         </button>
         <button className="rounded-xl bg-[#F3F3F3] px-3 py-1 text-[#23BE0A] font-semibold">
            #{tags[1]}
         </button>
         <p className="text-sm font-medium">Year of Publishing : {yearOfPublishing}</p>
         </div>
         <div className="flex items-center gap-5 border-b-2 pb-4">
              <div className="flex items-center gap-2">
                    <FcBusinessman></FcBusinessman>
                    <p>Publisher : {publisher}</p>
              </div>
              <div className="flex items-center gap-2">
                   <MdOutlineContactPage />
                    <p>Pages : {totalPages}</p>
              </div>
             
         </div>

          <div className="mt-5 ">
            <button className="btn px-3 py-1 rounded-3xl bg-[#328EFF26] text-[#328EFF] mr-2">Category : {category}</button>
            <button className="btn px-3 py-1 rounded-3xl bg-[#FFAC3326] text-[#FFAC33] mr-2">Rating : {rating}</button>
            <Link to={`/bookDetails/${bookId}`}><button className="btn px-3 py-1 rounded-3xl bg-[#23BE0A] mr-2">View Details</button></Link>
          
          </div>
        </div>
      </div>
    );
};

export default Book;