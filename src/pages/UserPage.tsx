import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


interface UserPageProps {
  user: ValidUser;
}

export default function UserPage({ user }:UserPageProps) {
  const [fullName, setFullName] = useState<string>("");
  const { username } = useParams();



  useEffect(() => {
    async function GetUserData() {
      if (user) {
        try {
          const res = await fetch(`http://127.0.0.1:5000/api/user-profile/${username}`, {
            headers: {
              Authorization: `Bearer ${user.token}`, 
            },
          });
          const userData = await res.json();
          console.log(userData)
          const fullName = `${userData.first_name} ${userData.last_name}`;
          console.log("Full Name:", fullName)
          setFullName(fullName);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    }

    GetUserData();
  }, [user]);

  return (
    <h1>{fullName}</h1> 
  )
}
