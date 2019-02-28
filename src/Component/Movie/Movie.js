import React, {Component} from 'react';
import './Movie.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteMovies,updateMovies}  from '../../actions/moviesAction';

class Movie extends Component{
    constructor(props){
      super(props);
      this.state = {
        editable: false
      }
    }
    // delete method
                                              
    handleDelete = (id) => {
      this.props.deleteMovies(id);
      console.log('movie has been deleted')
    };

    // update method
    handleEdit = () => {
        if(this.state.editable){
            let title = this.title.value;
            let director = this.director.value
            let publication =  this.publication.value;
            let id = this.props.Movies.id;
            let Movie = {id:id, title:title, director:director, publication: publication };
           this.handleUpdate(Movie,id)
          }
      this.setState({
        editable: !this.state.editable
      })
    }

    handleUpdate = (movie ,id) => {
      console.log('movie has been updated') 
      const data = {
        id:movie.id,
       title: movie.title,
       director: movie.director,
       publication: movie.publication
   } 
   this.props.updateMovies(data, id)
      }

    render(){
        let title = this.state.editable ? <input type='text' ref={input => this.title = input} 
                    defaultValue={this.props.Movies.title}/>:<p className ="title-class">{this.props.Movies.title}</p>
        let director = this.state.editable ? <input type='text' ref={input => this.director = input} 
                    defaultValue={this.props.Movies.director}/>:<p className ="director-class">{this.props.Movies.director}</p>
        let publication = this.state.editable ? <input type='text' ref={input => this.publication = input} 
                    defaultValue={this.props.Movies.publication}/>:<p className = "publication-class">{this.props.Movies.publication}</p>
      
      return(       
    <div className = "Movie">
         <Link to = {'/' + this.props.Movies.id}>View Movie </Link>
            {title}
            {director}
            {publication}  
          <button onClick={() => this.handleEdit(this.props.Movies.id)}className = "edit-button">
                              {this.state.editable? 'Submit' : 'Edit'}</button>
          <button onClick = {() => this.handleDelete(this.props.Movies.id)}
                className = "delete-button">Delete &#10006;</button>
          </div>
      )      
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
    deleteMovies: id => dispatch(deleteMovies(id)),
    updateMovies: (Movie, id) => dispatch( updateMovies(Movie, id))      
    }
  };
  export default connect(null, mapDispatchToProps)(Movie);



