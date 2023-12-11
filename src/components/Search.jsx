function Search({ location, setLocation }) {
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setLocation(e.target.value);
    }
  }

  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search location..."
      onKeyDown={(e) => handleKeyDown(e)}
    ></input>
  );
}

export default Search;
