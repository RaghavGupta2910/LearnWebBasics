import React from "react";
import "./books.css";

const Book = (props) =>{
    const{image, title, author, price} = props;
    return(
        <div className = "book">
            <div className = "image">
            <img src={image}/>
            </div>
            <div className = "book-info">
                <h2 className = "name">{title}</h2>
                <p className = "author">{author}</p>
                <p className = "price">Price: ${price}</p>
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default Book;