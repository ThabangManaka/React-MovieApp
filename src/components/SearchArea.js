import React from 'react'

const SearchArea = (props) =>{
  return (
<div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Search for a movie..
          </h1>
          <form id="searchForm" onSubmit={props.handleSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Movies..."
              onChange={props.handleChange}
            />
            <button type="submit" className="btn btn-primary btn-bg mt-3">
              Search
            </button>
          </form>
        </div>
      </div>
  );
}
export default SearchArea;