import { FaRegStar } from "react-icons/fa6";
const BookCard = ({ book }) => {
  const { bookId, bookName, author, image, rating, category,tags } = book;
  return (
    <div className="card card-compact shadow-xl p-4 border">
       <div className="bg-[#F3F3F3] flex justify-center items-center py-4 rounded-lg">
          <img
          className=" w-1/2 h-60 "
          src={image}
          alt="Shoes"
               />
       </div>
      <div className="mt-5">
         <div className="flex items-center gap-2 mb-2">
         <button className="rounded-xl bg-[#F3F3F3] px-3 py-1 text-[#23BE0A] font-semibold">
            {tags[0]}
         </button>
         <button className="rounded-xl bg-[#F3F3F3] px-3 py-1 text-[#23BE0A] font-semibold">
            {tags[0]}
         </button>
         </div>
        <h2 className="text-2xl font-semibold">{bookName}</h2>
        <p className="text-base font-normal pb-5 pt-3 border-b border-dashed">By : {author}</p>
        <div className="flex justify-between my-3 text-[#131313CC]">
            <p className="text-lg font-normal">{category}</p>
           <div className="flex items-center">
           <p className="text-lg font-normal">{rating}</p>
           <FaRegStar className="w-10"></FaRegStar>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
