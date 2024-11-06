import searchicon from "../utils/search-icon.png";
import { useState } from "react";

function Search() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggle = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div className="search">
      <input
        type="search"
        alt="search"
        placeholder="search here..."
        style={{ display: isSearchVisible ? "block" : "none" }}
      />
      <img src={searchicon} alt="icon search" onClick={toggle} />
      <button id="btn">iSearch</button>
    </div>
  );
}

export default Search;
