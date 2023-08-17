import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserProvider";
import EditUserProfile from "../component/EditUserProfile";


export default function UserPage() {
  const [fullName, setFullName] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const { username } = useParams();
  const { user } = useContext(UserContext);

  const handleEditClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    async function GetUserData() {
      if (user) {
        try {
          const res = await fetch(
            `http://127.0.0.1:5000/api/user-profile/${username}`,
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            }
          );
          const data = await res.json();
          console.log(data.user);
          const fullName = `${data.user.first_name} ${data.user.last_name}`;
          console.log("Full Name:", fullName);
          setFullName(fullName);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    }

    GetUserData();
  }, [user]);

  return (
    <>
      <div className="profile-header-layout">
        <div className="profile-header-text">
          <h1 className="profile-name">{fullName}</h1>
          <img src="/Open to Collaboration.png" alt="Open to Collaborate flag" className="collab-flag" />
          <h5 className="profile-specializations">
            Specializations | Areas of Interest{" "}
            <a href="" className="edit-info" onClick={handleEditClick}>
              <span>edit</span>
            </a>
          </h5>
        </div>
        <div className="profile-img-container">
          {/* <img src="" alt="" /> */}
        </div>
      </div>
      <hr className="profile-hr" />
      <main className="profile-main-layout">
        <section className="profile-main-body">
          <form action="">
            <textarea
              className="profile-post-field"
              rows={5}
              wrap="soft"
              placeholder="What do you want to share?"
            />
            <button className="profile-post-button">Share</button>
          </form>
          <div className="profile-main-display">
            <h2 className="profile-main-display-header">Your Posts</h2>
            <hr className="profile-main-display-hr"/>
            {/* <p>Posts</p> */}
          </div>
        </section>
        <aside className="profile-main-aside">
          <div className="profile-aside-about">
            <h3 className="profile-aside-headers">About</h3>
          </div>
          <div className="profile-aside-collections">
            <h3 className="profile-aside-headers">Collections
            <Link to="/user-collections/:username"><img src="/add.png" alt="add icon" className="add-icon"/></Link>
            </h3>
          </div>
          <div className="profile-aside-projects">
            <h3 className="profile-aside-headers">Projects</h3>
          </div>
        </aside>
      </main>
      <EditUserProfile show={showModal} onHide={handleCloseModal} />
    </>
  );
}
