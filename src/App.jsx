import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import SearchUser from "./Components/SearchUser/SearchUser";
import GithubDetails from "./Components/githubDetails/githubDetails";

function App() {
  const [searchTerm , setsearchTerm] = useState('');
  return (
    <>
      <Header />
      <SearchUser  UpdateSearchTerm={setsearchTerm}/>
      {(!searchTerm) ? <GithubDetails/> : <GithubDetails key={searchTerm} GithubUserName= {searchTerm}/>} 
    </>
  );
}

export default App;
