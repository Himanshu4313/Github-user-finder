import UseDebounce from "../../hooks/useDebounce";
import "./SearchUser.css";
function SearchUser({ UpdateSearchTerm }) {
  const setUseDebounce = UseDebounce((e) => UpdateSearchTerm(e.target.value));
  return (
    <>
      <div className="search-user-container">
        <input
          type="search"
          id="SearchUser"
          placeholder="Search github user.."
          onChange={setUseDebounce}
        />
        {/* <button id="getbtn">Get Data</button> */}
      </div>
    </>
  );
}
export default SearchUser;
