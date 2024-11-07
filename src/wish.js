// wish list.....
// get items...
export const wishItem =()=>{
    let wishList=[];
    const storedBook=localStorage.getItem('wishList');
    if (storedBook){
         wishList=JSON.parse(storedBook);
    }
    return wishList;
}
// save items
export const saveWishItem=book=>{
      let wishList= wishItem();
     const isExist= wishList.find(b=> b.bookId == book.bookId);
     if(isExist){
       return alert('already exist')
     }
     wishList.push(book);
     localStorage.setItem('wishList', JSON.stringify(wishList))
     alert('read book successfully added')
}
export const removeWishItem=id=>{
    let wishList=wishItem();
    const remaining = wishList.filter(b=> b.bookId !== id)
    localStorage.setItem('wishList', JSON.stringify(remaining))
    alert("remove successfully")
}
