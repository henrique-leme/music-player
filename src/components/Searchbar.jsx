const Searchbar = () => (

  <form
    autoComplete="off"
    action=""
    className="p-2 text-gray-400 focus-within:text-gray-600"
  >
    <label htmlFor="search-field" className="sr-only">Search for songs</label>
    <div className="flex flex-row justify-start items-center" />
  </form>
);

export default Searchbar;
