import React from "react"; //ES6
// import ReactDOM from "react-dom"; //Has Render method.
import { createRoot } from "react-dom/client"; //For React 18
//CSS
import "./index.css";

const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg",
  text: "I Love You to the Moon and Back",
  authorName: "Amelia Hepworth and Tim Warnes",
};

const secondBook = {
  img: "https://m.media-amazon.com/images/I/51FzVxSG6NL.jpg",
  text: "Our Class is a Family",
  authorName: "Shannon Olsen",
};

const img =
  "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg";
const text = "I Love You to the Moon and Back";
const authorName = "Amelia Hepworth and Tim Warnes";

function BookList() {
  //traditional JS function

  //now we return html i.e called JSX.
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.text}
        author={firstBook.authorName}
      />

<Book
        img={firstBook.img}
        title={firstBook.text}
        author={firstBook.authorName}
      />

<Book
        img={firstBook.img}
        title={firstBook.text}
        author={firstBook.authorName}
      />

<Book
        img={firstBook.img}
        title={firstBook.text}
        author={firstBook.authorName}
      />

<Book
        img={firstBook.img}
        title={firstBook.text}
        author={firstBook.authorName}
      />


<Book
        img={firstBook.img}
        title={firstBook.text}
        author={firstBook.authorName}
      />


<Book
        img={firstBook.img}
        title={firstBook.text}
        author={firstBook.authorName}
      />
  
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img}></img>
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

//ReactDOM.render(<BookList />, document.getElementById("root"));  //This for React 17

// Deprecation notice: ReactDOM.render is no longer supported in React 18

createRoot(document.getElementById("root")).render(<BookList />); //For React 18 Version
