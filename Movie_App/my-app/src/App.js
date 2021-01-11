import  React,{useEffect,useState} from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import MovieHead from "./components/MovieHead";
import Movielist from "./components/movielist";
import "./App.css";
import Searchbar from "./components/search";
import AddFav from "./components/addfav";
import RemoveFav from "./components/removefav";

// const API_KEY="http://www.omdbapi.com/?i=tt3896198&apikey=400a1e80";

const App=()=>{
 
    const [movies, setMovies]= useState([]);
    const [favourites, setFavourites]= useState([]);
    const [searchValue, setSearchValue]= useState('');

    const getMovieRequest = async ()=>{
      // add the api key generated to the url i.e apikey=[yourapikey]
      const url =`http://www.omdbapi.com/?s=${searchValue}&apikey`;
      const response = await fetch(url);
      const responseJson= await response.json();
      
      if(responseJson.Search){
        setMovies(responseJson.Search);
      }
    };

    useEffect(()=>{
      getMovieRequest();
    }, [searchValue]);

    // useEffect(()=>{
    //   const movieFav =JSON.parse(
    //     localStorage.getItem('movie-app-favourites')
    //   );
    //   setFavourites(movieFav); 
    // });

    const saveToLocalStorage =(items)=>{
      localStorage.setItem('movie-app-favourites', JSON.stringify(items));
    } ;

    function addFavMovie(movie) {
    const newFavList = [...favourites, movie];
    setFavourites(newFavList);
    saveToLocalStorage(newFavList);
  }

    const RemoveFavMovie=(movie)=>{
      const newFavList =favourites.filter(
        (favourite)=>favourite.imdbID !== movie.imdbID);
      setFavourites(newFavList);
      saveToLocalStorage(newFavList);
    };
  
    return (
      <div className="container">
         <div className ="container-fluid movie-app">
         <div className ="row d-flex align-items-center mt-4 mb-4">
          <MovieHead heading ='Movies'/>
          <Searchbar searchValue={searchValue} setSearchValue={setSearchValue}/>
         </div>
        
         <div className ="row">
         <Movielist movies ={movies} 
         handleFavouriteClick={addFavMovie} 
         favouriteComponent={AddFav}
         />
         </div>
      </div>
      <div className ="row d-flex align-items-center mt-4 mb-4">
          <MovieHead heading ='Favourites'/>
         </div>
         <div className ="row">
         <Movielist movies ={favourites} 
         handleFavouriteClick={RemoveFavMovie} 
         favouriteComponent={RemoveFav}
         />
         </div>
      
      
          
      </div>
      )
  };

export default App;
