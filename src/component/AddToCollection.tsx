import { FormEvent, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserProvider";
import DisplayCollection from "./DisplayCollection";

export default function AddToCollection() {
  const titleField = useRef<HTMLInputElement>(null);
  const authorField = useRef<HTMLInputElement>(null);
  const yearPublishedField = useRef<HTMLInputElement>(null);
  const languageField = useRef<HTMLInputElement>(null);
  const descriptionField = useRef<HTMLInputElement>(null);
  const resourceTypeField = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (user.email) navigate("/user-collections/:username");
  }, [user, navigate]);

  async function handleCollectionData(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await fetch('http://127.0.0.1:5000/api/publish-collection', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`
      },
      body: JSON.stringify({
        book_title: titleField.current!.value,
        author: authorField.current!.value,
        year_published: yearPublishedField.current!.value,
        language: languageField.current!.value,
        description: descriptionField.current!.value,
        type: resourceTypeField.current!.value
      }),
    });
    if (res.ok) {

      console.log(res.status)
      const data = await res.json();
      resetForm();
    } else window.alert("Collection item failed to register");

    function resetForm() {
      (titleField.current!.value = ""),
      (authorField.current!.value = ""),
      (yearPublishedField.current!.value = ""),
      (languageField.current!.value = ""),
      (descriptionField.current!.value = ""),
      (resourceTypeField.current!.value = "");
    }
  }

  return (
    <>
    <main className="collection-block">
    
        <div className="collection-input-section">
          <div className="collection-blur">
            <h1 className="collection-item-input-header">Enter a new item into your collection</h1>
            <form className="collection-form" action="" onSubmit={handleCollectionData}>
              <input
                className="collection-item-input-field"
                ref={titleField}
                type="text"
                placeholder="Title"
              /><br />
              <input
                className="collection-item-input-field"
                ref={authorField}
                type="text"
                placeholder="Author/Editor"
              /><br />
              <input
                className="collection-item-input-field"
                ref={yearPublishedField}
                type="text"
                placeholder="Year Published"
              /><br />
              <input
                className="collection-item-input-field"
                ref={languageField}
                type="text"
                placeholder="Language(s)"
              /><br />
              <input
                className="collection-item-input-field"
                ref={descriptionField}
                type="text"
                placeholder="Description"
              /><br />
              <input
                className="collection-item-input-field"
                ref={resourceTypeField}
                type="text"
                placeholder="Type (article, book, dissertation, etc.)"
              />
              <button type="submit" className="add-to-collection-btn">Add to Collection</button>
            </form>
          </div>
        </div>
        <section className="display-collection-full">
          <DisplayCollection username={user.username}/>
        </section>
    </main>
    </>
  );
}

// Essentially, run a check if the collection name exists, if it does
