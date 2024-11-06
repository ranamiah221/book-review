
import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import BookCard from '../../../components/BookCard/BookCard';
const Books = () => {
    const [books, setBooks] =useState([]);
    useEffect(()=>{
        fetch('books.json')
        .then(res=> res.json())
        .then(data=> setBooks(data))
    },[])
    return (
        <>
        <SectionTitle title='Books'></SectionTitle>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
              books.map(book=><BookCard key={book.bookId} book={book}></BookCard>)
            }
        </div>
        </>
    );
};

export default Books;