import { useState } from "react";
import "./GithubDetails.css";
import { useEffect } from "react";
import axios from "axios";
function GithubDetails({ SearchText }) {
  const [isLoading, setIsLoading] = useState(true);
  const [gitDetails, setGitDetails] = useState({});
  const [text, setText] = useState("HarshBalwanix");

  async function getGithubDetails() {
    try {
      setIsLoading(true);
      const gitHubResponse = await axios.get(
        `https://api.github.com/users/${text}`
      );
      //console here response of this url
      console.log(gitHubResponse);
      // console here response.data
      const userDetails = {
        avatar_url: gitHubResponse.data.avatar_url,
        user_Name: gitHubResponse.data.name,
        login_Name: gitHubResponse.data.login,
        user_Id: gitHubResponse.data.id,
        user_Location: gitHubResponse.data.location,
        user_Bio: gitHubResponse.data.bio,
        public_repos: gitHubResponse.data.public_repos,
        followers: gitHubResponse.data.followers,
      };
      setGitDetails(userDetails);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  setText(SearchText);
  useEffect(() => {
    getGithubDetails();
    setText(SearchText);
  }, [text]);
  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="Details-container">
          <div className="avatarImage">
            <img src={gitDetails.avatar_url} alt="avatarPhoto" />
          </div>
          <div className="userDetails-wrapper">
            <div className="UserName textBox">Name: {gitDetails.user_Name}</div>
            <div className="location textBox">
              Location: {gitDetails.user_Location}
            </div>
            <div className="reposetory textBox">
              Public_repos: {gitDetails.public_repos}
            </div>
            <div className="followers textBox">
              Followers: {gitDetails.followers}
            </div>
            <div className="bio textBox">Bio: {gitDetails.user_Bio}</div>
          </div>
        </div>
      )}
    </>
  );
}
export default GithubDetails;
