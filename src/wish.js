// wish list.....

import Swal from "sweetalert2";

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
       return Swal.fire({
        title: "Already Exist",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
     }
     wishList.push(book);
     localStorage.setItem('wishList', JSON.stringify(wishList))
     return Swal.fire({
      title: "Added Read Book successfully",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
}
export const removeWishItem=id=>{
    let wishList=wishItem();
    const remaining = wishList.filter(b=> b.bookId !== id)
    localStorage.setItem('wishList', JSON.stringify(remaining))
    Swal.fire({
      title: "Deleted Successfully",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
}
