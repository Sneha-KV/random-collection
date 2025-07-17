import React, { useEffect, useState } from "react";
import "./autoComplete.css";

/**
 * Container
 *  - Heading
 *  - Search Bar
 *  - fetch data upon search/ type
 *  - Display results
 *  - Implement debouncing for optimization
 *  - Implement caching for optimization
 *  - Additional
 *    - close the search results section on blur and show on focus
 *    - Keyboard navigation
 * @returns Search component
 */
const AutoComplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState();

  const fetchResults = async () => {
    if (!inputValue){
        setSearchResults();
        return;
    }
    const apiResults = await fetch(
      `https://dummyjson.com/recipes/search?q=${inputValue}`
    );
    const resultData = await apiResults.json();

    console.log(resultData);
    setSearchResults(resultData?.recipes);
  };
  useEffect(() => {
    const timer = setTimeout(fetchResults, 400)
    
    return () => clearTimeout(timer)
  }, [inputValue]);

  return (
    <div className="search-container">
      <img
        className="search-logo"
        src="https://www.google.com/logos/doodles/2025/mothers-day-2025-may-25-6753651837110683-2x.png"
        alt="logo"
      />
      <div className="search-bar-container">
        <input
          value={inputValue}
          className="search-bar"
          onChange={(e) => {
            console.log(e);
            setInputValue(e.target.value);
          }}
        />
        {searchResults?.length > 0 && (
          <div className="search-results-container">
            <ul className="search-results-list">
              {searchResults?.map((result) => {
                return <li key={result.id}>{result.name}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoComplete;
