import React from 'react';
import {useState} from "react";

function SearchBar() {
    const [query, setQuery] = useState("")
    return (
        <div class="box" >
            <input type="text" maxlength="12" placeholder="FIPS Code" class="searchbar"
            onChange={event => setQuery(event.target.value)}></input>
            {/* {
                Data.map((post, index) => {
                    <div key={index}>
                    <p>{post.title}</p>
                    <p>{post.author}</p>
                    </div>
            })
            } */}
        </div>
    )
}

export default SearchBar;