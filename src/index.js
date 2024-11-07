// Reading book.....
// get items...
export const getReadItem =()=>{
    let readBook=[];
    const storedBook=localStorage.getItem('readBook');
    if (storedBook){
         readBook=JSON.parse(storedBook);
    }
    return readBook;
}
// save items
export const saveReadItem=book=>{
      let readBook= getReadItem();
     const isExist= readBook.find(b=> b.bookId == book.bookId);
     if(isExist){
       return alert('already exist')
     }
     readBook.push(book);
     localStorage.setItem('readBook', JSON.stringify(readBook))
     alert('read book successfully added')
}
export const removeReadItem=id=>{
    let readBook=getReadItem();
    const remaining = readBook.filter(b=> b.bookId !== id)
    localStorage.setItem('readBook', JSON.stringify(remaining))
    alert("remove successfully")
}


