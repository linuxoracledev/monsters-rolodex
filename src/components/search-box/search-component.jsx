import React from "react";
import "./search-box.styles.css"

export const Search = ({ placeholderText, changeHandler }) => {
    return (
        <input
            className="search-box"
            type="search"
            placeholder={placeholderText}
            onChange={changeHandler}
        />)
}