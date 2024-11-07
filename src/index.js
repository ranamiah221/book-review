
// get items...
export const getItem =()=>{
    let bookList=[];
    const storedBook=localStorage.getItem('bookList');
    if (storedBook){
         bookList=JSON.parse(storedBook);
    }
    return [];
}
// save items
export const saveItem=book=>{
      let bookList= getItem();
     const isExist= bookList.find(b=> b.bookId === book.bookId);
     if(isExist){
        alert('already exist')
     }
     bookList.push(book);
     alert('book successfully added')
}
export const removeItem=id=>{
    let bookList=getItem();
    const remaining = bookList.filter(b=> b.bookId !== id)
    localStorage.setItem('bookList', JSON.stringify(remaining))
    alert("remove successfully")
}
