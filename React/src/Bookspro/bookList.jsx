import React from "react";
import Book from "./book.jsx";
import books from "./books.json";

const BookList = () =>{
    return(
        <div>
            {books.map((ele) =>{
                return <Book 
                image={ele.image} 
                title={ele.title} 
                author={ele.author} 
                price={ele.price}/>
            })}
        </div>
    )
}

export default BookList;