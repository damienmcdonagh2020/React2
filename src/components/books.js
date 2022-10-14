import React from "react";
import { BookItem } from "./bookItem";

export class Books extends React.Component{
    render(){
        //Maps the function
        return this.props.books.map(
            //Arrow Function
           (books)=>{
                return <BookItem book={books} key={books.isbn}></BookItem>//Key ISBN is unique
           }
        );
    }
}