import React ,{ Component }from 'react';
import AllMovies from '../../Component/AllMovies/AllMovies';
import './Main.css';
import {connect} from 'react-redux';
import { getMovies, addMovies}  from '../../actions/moviesAction';
import PropTypes from 'prop-types';

class Main extends Component {
    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    // get method
      componentDidMount(){
        this.props.getMovies() 
      }

    // post method
      handleSubmit = (event) =>{
        event.preventDefault();
        let Movie = {    
          title: this.state.title,
          director:this.state.director,
          publication: this.state.publication
      }
      
      this.props.addMovies(Movie);

    }

    render(){     
        return(
            <div className = "Main-div">
            <div className = "form-div">
            <form onSubmit = {this.handleSubmit}>
                <input type =  "text" placeholder = "Add title here" name ="title" onChange = {this.handleChange}/>
                <input type = "text" placeholder = "Add director here" name = "director" onChange = {this.handleChange}/>
                <input type = "text" placeholder ="Add publication here" name ="publication" onChange = {this.handleChange}/>
                <input type = "submit" value = "Add New Movie"/>
            </form>
            </div>

              <AllMovies Movies = {this.props.Movies}/> 
                </div>
        )
    }
}

Main.propTypes = {
  getMovies: PropTypes.func.isRequired,
  Movies: PropTypes.array.isRequired,
  addMovies: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  Movies: state.posts.Movies,
  newPost: state.posts.Movie
});  

const mapDispatchToProps = (dispatch) => {
  return {
  getMovies: Movies => dispatch(getMovies(Movies)),
  addMovies: Movie => dispatch(addMovies(Movie)),

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);



