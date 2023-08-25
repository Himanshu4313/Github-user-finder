import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import SearchUser from "./Components/SearchUser/SearchUser";
import GithubDetails from "./Components/githubDetails/githubDetails";

function App() {
  const [updateSearch , setUpdateSearch] = useState();
  return (
    <>
      <Header />
      <SearchUser  UpdateSearchTerm={setUpdateSearch}/>
         {updateSearch}
      <GithubDetails  SearchText = {updateSearch}/>
    </>
  );
}

export default App;
