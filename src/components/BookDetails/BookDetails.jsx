import { Link, useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const books = useLoaderData([]);
  const bookDetails = books.find((book) => book.bookId === id);
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = bookDetails;

  return (
    <div className="mt-2 md:flex gap-5 ">
     <div className="bg-[#F3F3F3] flex justify-center items-center rounded-lg md:p-10 md:w-1/2">
     <img className="md:w-2/4"
          src={image}
          alt="Album"
        />
     </div>
        
     
      <div className="md:w-1/2 md:flex flex-col p-4 md:p-0">
        <h2 className="text-4xl font-bold">{bookName}</h2>
        <p className="text-base font-normal pb-5 pt-3 border-b-2 border-dashed">By : {author}</p>
        <p className="text-lg font-normal border-b-2 py-3 border-dashed mb-4">{category}</p>
        <p className=""><span className="text-base font-bold">Review : </span>{review.slice(0,200)}.</p>
        <div className="flex items-center gap-4 mt-5 border-b-2 pb-5">
            <p className="text-base font-bold">Tag </p>
        <button className="rounded-xl bg-[#F3F3F3] px-3 py-1 text-[#23BE0A] font-semibold">
            {tags[0]}
         </button>
         <button className="rounded-xl bg-[#F3F3F3] px-3 py-1 text-[#23BE0A] font-semibold">
            {tags[0]}
         </button>
         </div>

         <div className="flex items-center gap-2 md:gap-20 my-5 flex-grow">
            <div className="">
                <p className="text-base font-medium">Number of Page :</p>
                <p className="text-base font-medium">Publisher :</p>
                <p className="text-base font-medium">Year of Publishing :</p>
                <p className="text-base font-medium">Rating :</p>
            </div>
            <div>
                <p>{totalPages}</p>
                <p>{publisher}</p>
                <p>{yearOfPublishing}</p>
                <p>{rating}</p>
            </div>
         </div>

        <div className="card-actions justify-start">
          <button className="btn bg-white border border-black">Read</button>
          <button className="btn bg-cyan-500 text-white">Wishlist</button>
          <Link to='/'><button className="btn bg-green-400 text-white">Home</button></Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
