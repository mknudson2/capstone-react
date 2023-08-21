import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserProvider";
import Spinner from "react-bootstrap/esm/Spinner";

const baseApi = import.meta.env.VITE_APP_BASE_API;

export default function DisplayCollection({ username }: { username: string }) {
  const [collection, setCollection] = useState<Array<Collectible> | null>(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const res = await fetch(`${baseApi}/user-collection/${username}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });
        if (res.ok) {
          const data = await res.json();
          setCollection(data.collections.reverse());
        } else {
          window.alert("Failed Call");
        }
      } catch (error) {
        console.error("Error fetching collection:", error);
        window.alert("An error occurred while fetching collection.");
      }
    };

    fetchCollection();
  }, [username, user.token]);

  return (
    <div>
      <h1>{user.first_name}'s Collection</h1>
      <hr className="horizontal-rule" />
      {collection === null ? (
        <Spinner animation="border" variant="primary" />
      ) : collection.length === 0 ? (
        <p>{user.first_name} doesn't have anything in their collection.</p>
      ) : (
        <ul>
          {collection.map((item: Collectible, i: number) => (
            <li key={i}>
                <h2>{item.book_title}</h2>
                <p>Author: {item.author}</p>
                <p>Language: {item.language}</p>
                <p>Type: {item.type}</p>
                <p>Description: {item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
