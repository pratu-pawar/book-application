import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { BOOK_DETAILS_URL } from "./API";

const BookDetails = () => {
  const [book, setBook] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(BOOK_DETAILS_URL + id)
      .then((res) => res.data)
      .then((data) => setBook(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="book-details">
      <div className="boo-image">
        <h2>{book?.title}</h2>
        <img src={book?.image_url} alt="#" />
      </div>
      <div className="book-description">
        <h2>
            Description
        </h2>
        <p>
            {book?.description}
        </p>
        <h2>
            Authors
        </h2>
        <p>{book?.authors}</p>
        <h2>
            Genre
        </h2>
        <p>{book?.genres}</p>
      </div>
    </div>
  );
};

export default BookDetails;
