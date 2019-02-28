import React from 'react'; 
import Movie from '../../Component/Movie/Movie';
import "./AllMovies.css";


const   AllMovies = (props) => {
  return(
      <div>
          <div className = 'Movies-list'>
             {props.Movies.map(Movies => (
                 
                <Movie  Movies = {Movies} 
                key = {Movies.id}
                id = {Movies.id} 
                title = {Movies.title} 
                director = {Movies.director}
                publication = {Movies.publication}   
            />
             )
             
              )}
          </div>
      </div>
  )
}

export default AllMovies;



  

   
