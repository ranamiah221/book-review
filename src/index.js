// Reading book.....

import Swal from "sweetalert2";

// get items...
export const getReadItem =()=>{
    let readBook=[];
    const storedBook=localStorage.getItem('readBook');
    if (storedBook){
         readBook=JSON.parse(storedBook);
    }
    return readBook;
}
// save items alert('already exist')
export const saveReadItem=book=>{
      let readBook= getReadItem();
     const isExist= readBook.find(b=> b.bookId == book.bookId);
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
     readBook.push(book);
     localStorage.setItem('readBook', JSON.stringify(readBook))
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
export const removeReadItem=id=>{
    let readBook=getReadItem();
    const remaining = readBook.filter(b=> b.bookId !== id)
    localStorage.setItem('readBook', JSON.stringify(remaining))
    return Swal.fire({
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


