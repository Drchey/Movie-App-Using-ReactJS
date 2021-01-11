import React from "react";

const Movielist =(props)=>
   {
       const FavouriteComponent =props.favouriteComponent;

       return(
           <>
             {props.movies.map((movie,index)=>(
         <div className="image-container d-flex justify-content-start m-3">
                 <img src={movie.Poster} alt={movie.title}/>
        <div 
            onClick={props.handleFavouriteClick} 
            className="overlay d-flex align-items-center justify-content-center"
                 >
            <FavouriteComponent />
                 </div>
         </div>             
                ))}
           </>
       )

   }; 

export default Movielist;