import React from "react";
import '../css/SearchBox.css';

const SearchBox = ({search}) => {
    return (
        <div className="searchcontainer">
            <h2>RoboFriends</h2>
            <input type="search" placeholder="Enter Robot Username" className="txtbox br3 bg-lightest-blue" onChange={search}/>
        </div>
    );
}

export default SearchBox;