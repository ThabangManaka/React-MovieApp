import React, {Component} from 'react';

const MovieInfo = (props) => {
    return (
        <div className="container">
        <div className="row" onClick={props.closeMovieInfo} style={{cursor: "pointer",paddingTop:50}}>
            <i className="fas fa-arrow-left"></i>
            <span style={{marginLeft: 30}}> Go Back</span>
        </div>
        <div className="row">
        <div className="card card-body bg-dark  text-light">
            {props.currentMovie.poster_path == null ? <img src={`https:s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="Card image"  style={{with: "100", height:30}} /> :
        <img src={`https://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt="Card image"  style={{width: "100%", height:360}} />}   
            </div>
            <div className="col-md-8">
            <div className="info-container">
                <p>  <strong>Title: </strong>{props.currentMovie.title}</p>
                <p> <strong>Release Date: </strong>{props.currentMovie.release_date.substring(5).split("-").concat(props.currentMovie.release_date.substring(0,4)).join("/")}</p>
                <p> <strong>Overview: </strong>{props.currentMovie.overview}</p>
            </div>
            <hr />
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-danger"
              
              >
                Add to Watch List
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-warning"
                style={{marginLeft: 30}}
              >
                 <i className="fas fa-star"></i>
              </a>
        </div>
        </div>
  
         </div>
    )
}

export default MovieInfo;