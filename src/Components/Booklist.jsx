import React from "react";
import "../App";
import { API_URL } from "../API";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAppContext } from "./Context/appContext";
import { useNavigate } from "react-router";

const Booklist = () => {
  const [books, setBook] = useState([]);
  const navigate = useNavigate()

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book">
          <div>
            <h4>{book.title}</h4>
          </div>
          <div>
            <img onClick={() => {
                navigate(`/book/${book.id}`)
            }} src={book.image_url} alt=" "></img>
          </div>
          <div>
            {favoritesChecker(book.id) ? (
              <button onClick={() => removeFromFavorites(book.id)}>
                remove from Favorites
              </button>
            ) : (
              <button onClick={() => addToFavorites(book)}>
                Add To Favorites
              </button>
            )}
          </div>
        </div>
      ))}
      ;
    </div>
  );
};
export default Booklist;
