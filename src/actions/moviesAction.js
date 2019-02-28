import * as MoviesService from '../Component/MoviesService';
import * as actionTypes from './actionTypes';

export const getMovies = () => {
  return async (dispatch) => {
    try {
      const data = await MoviesService.fetchAll();
      console.log(data)
      dispatch({
        type: actionTypes.GET_MOVIES,
        payload: data
      });
    } catch(e) {
      console.error("error" , e)
    }
}
};

export const addMovies = (Movie) => {
  return async (dispatch) => {
      await MoviesService.postMovie(Movie);
      console.log(Movie);
      dispatch({
        type: actionTypes.POST_MOVIES,
        payload: Movie
      });
}
};

export const deleteMovies = (id) => {
  return async (dispatch) => {
    await MoviesService.deleteOneMovie(id);
    dispatch({
      type: actionTypes.DELETE_MOVIES,
      payload:id
    })
}

}
export const updateMovies = (movie, id) => {
  return async (dispatch) => {
      await MoviesService.editMovie(movie, id)
      dispatch({
        type: actionTypes.UPDATE_MOVIES,
        id,
        movie
      });     
}

}





