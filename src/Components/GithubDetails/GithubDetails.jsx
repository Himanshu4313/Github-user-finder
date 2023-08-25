import "./GithubDetails.css";
import useGithubDetails from "../../hooks/useGithubDetails";
function GithubDetails({ GithubUserName }) {
  const [gitusestate] = useGithubDetails(GithubUserName);
  return (
    <>
      {gitusestate.isLoading ? (
        <h2>Loading..</h2>
      ) : (
        <div className="Details-container">
          <div className="avatarImage">
            <img src={gitusestate.gitDetails.avatar_url} alt="avatarPhoto" />
          </div>
          <div className="userDetails-wrapper">
            <div className="Firstinfo">
              <div className="UserName textBox">
                Name: {gitusestate.gitDetails.user_Name}
              </div>
              <div className="location textBox">
                Location: {gitusestate.gitDetails.user_Location}
              </div>
            </div>
            <div className="Secondinfo">
              <div className="reposetory textBox">
                Public_repos: {gitusestate.gitDetails.public_repos}
              </div>
               <div className="followers textBox">
              Followers: {gitusestate.gitDetails.followers}
            </div>
            <div className="bio textBox">
              Bio: {gitusestate.gitDetails.user_Bio}
            </div>
            </div>
           
          </div>
        </div>
      )}
    </>
  );
}
export default GithubDetails;
