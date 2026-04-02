import Button from "./Button";

function SearchBar() {
  return (
    <div>
      <input type="text" placeholder="search" />
      <Button size="medium" variation="primary">
        Search
      </Button>
    </div>
  );
}

export default SearchBar;
