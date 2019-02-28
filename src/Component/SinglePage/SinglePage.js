import React, {Component} from 'react';
import './SinglePage.css';

class SinglePage extends Component{
    constructor(){
        super()
        
        this.state= {
            Movie : ''
        }
    }
    
    componentDidMount(){
        let id = this.props.match.params.id
        fetch(`https://crudend.app.sbb.ch/api/movies/${id}`,{
            method: 'GET',
            headers: {'content-type': 'application/json'}
        })
        .then(response => response.json())
         .then(data => this.setState({Movie:data}));
    }
    render(){

        const Movie = this.state.Movie
        return(
            <div className = "main-div">
               <div>{Movie.id}</div>
                 <div><h3> {Movie.title}</h3></div>
                <div><h3>{Movie.director}</h3></div>
               <div> <h3>{Movie.publication}</h3></div>      
            </div>
        )
    }
}
export default SinglePage;
