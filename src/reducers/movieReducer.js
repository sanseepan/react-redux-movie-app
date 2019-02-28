import * as actionTypes from '../actions/actionTypes';

const initialState = {
  Movies: [],
};

export default (state = initialState, action) => {
    switch (action.type){

      case actionTypes.GET_MOVIES:
      return Object.assign({}, state,
          {
              Movies: action.payload
          });

      case actionTypes.POST_MOVIES:
      return { 
        ...state,
        Movies: state.Movies.concat(action.payload)
    };

      case actionTypes.DELETE_MOVIES:
      return {
                Movies: state.Movies.filter(movie => movie.id !== action.payload)
            };

      case actionTypes.UPDATE_MOVIES:
      return Object.assign({}, state ,{
            Movies: state.Movies.map((movie) => {
              if(movie.id === action.id){
                return action.movie
              }
              return movie
            })
        })
        
      default:
      return state;
    }     
  };




