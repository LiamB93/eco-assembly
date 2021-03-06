import "./Search.css";

const Search = (props) => {
  return (
    <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
      <input
        className="search-input"
        //value={props.value}
        onChange={(event) => {
          props.setInput(event.target.value);
        }}
        name="Search"
        placeholder={`Search for ${props.title} products `}
        type="text"
        autoFocus
      />
    </form>
  );
};

export default Search;
