import React from "react";
import "../App";
import { useAppContext } from "./Context/appContext";


const Favorites = () =>{  

    const{favorites, addToFavorites, removeFromFavorites} = useAppContext();

    console.log("favorites are", favorites);


    const favoritesChecker = (id) =>{ 
        const boolean = favorites.some((book) => book.id ===id);
        return boolean;

 };

    return( 
        <div className="favorites"> 
         {Favorites.length > 0 ? favorites.map((book)=> ( 
        <div key={book.id} className="book"> 
        <div> 
            <h4>{book.title}</h4> 
        </div>
        <div> 
            <img src={book.image_url} alt=" "></img>
        </div>
        <div> 
            {favoritesChecker(book.id) ?( 
            <button onClick={()=> removeFromFavorites(book.id)}> 
            remove from Favorites 
            </button> 
            ):( 
                <button onClick={()=> addToFavorites(book)}> 
                Add To Favorites 
                </button>  
            )}
            
        </div>
        </div>

        )) :<h1> you don't have any favorite book yet!</h1>}
        </div>
    )
}

export default Favorites ;