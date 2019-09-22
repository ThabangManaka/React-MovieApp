import React, {Component} from 'react';


const Movie = (props) => {
    return (
      <div className="col-md-3 mb-5">
      <div className="card card-body bg-dark text-center h-100">
     
        {
            
      props.image ==null ? <img src={`https:s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="card image" style={{width:"100%",height: 360}} />: 
      <img src={`https://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={{width:"100%",height: 360}} />
           
        }
         <div className="card-content">
            <p><a  className="btn btn-primary" href="#" onClick={()=> props.viewMovieInfo(props.movieId)}>View Details  <i className="fas fa-chevron-right" /></a></p>
        
          </div>
        </div>
         
      </div>
    )
}
export  default Movie;