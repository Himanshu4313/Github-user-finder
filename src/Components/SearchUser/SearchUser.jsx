import { useState } from "react";
import "./SearchUser.css";
function SearchUser({UpdateSearchTerm}) {
     const [searchTerm , setSearchTerm] = useState('');
  return (
    <>
      <div className="search-user-container">
        <input type="text" id="SearchUser" placeholder="Search github user.."
         onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button id="getbtn" onClick={ () => UpdateSearchTerm(searchTerm)} >Get Data</button>
       
      </div>
    </>
  );
}
export default SearchUser;
