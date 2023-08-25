import axios from "axios";
import { useEffect, useState } from "react";

function useGithubDetails(GithubUserName) {
  const [gitusestate, setgitUseState] = useState({
    gitDetails: {},
    isLoading: true,
  });

  async function getGithubDetails() {
    setgitUseState({ ...gitusestate, isLoading: true });
    let gitHubResponse;
    try {
      if (GithubUserName) {
        gitHubResponse = await axios.get(
          `https://api.github.com/users/${GithubUserName}`
        );
      } else {
        gitHubResponse = await axios.get(
          `https://api.github.com/users/Himanshu4313`
        );
      }

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
      setgitUseState({
        ...gitusestate,
        gitDetails: userDetails,
        isLoading: false,
      });
    } catch (error) {
      console.error("Something went Wrong please try again..", error);
    }
  }
  useEffect(() => {
    getGithubDetails();
  }, []);

  return [gitusestate];
}
export default useGithubDetails;
