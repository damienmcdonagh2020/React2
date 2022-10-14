import React from "react";
import Card from 'react-bootstrap/Card';

export class BookItem extends React.Component{
    render(){
        return(
            // <div>
            //     <h3>{this.props.book.title}</h3>
            //     <img src={this.props.book.thumbnailUrl}></img>
            //     <h6>{this.props.book.authors[0]}</h6>
            // </div>
            <Card>
            <Card.Header as="h5">{this.props.book.title}</Card.Header>
            <Card.Body>
              <Card.Title>
              <img src={this.props.book.thumbnailUrl}></img>
              <footer>
                 {this.props.book.authors[0]}
                 </footer>
                </Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
             
            </Card.Body>
          </Card>
        );
    }
}