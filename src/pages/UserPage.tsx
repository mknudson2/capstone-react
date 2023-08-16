import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserProvider";

export default function UserPage() {
  const [fullName, setFullName] = useState<string>("");
  const { username } = useParams();
  const { user } = useContext(UserContext);

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
          console.log(data);
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

  return <h1>{fullName}</h1>;
}
