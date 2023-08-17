import { FormEvent, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserProvider";

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
    e.preventDefault;
    const res = await fetch(`http://127.0.0.1:5000/api/publish-collection/${username}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        book_title: titleField.current!.value,
        author: authorField.current!.value,
        year_published: yearPublishedField.current!.value,
        language: languageField.current!.value,
        description: descriptionField.current!.value,
        type: resourceTypeField.current!.value,
      }),
    });
    if (res.ok) {
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
      <h1 className="collection-item-input-header">Enter a new item into your collection</h1>
      <form action="">
        <input
          className="collection-item-input-field"
          ref={titleField}
          type="text"
          placeholder="Title"
        />
        <input
          className="collection-item-input-field"
          ref={authorField}
          type="text"
          placeholder="Author/Editor"
        />
        <input
          className="collection-item-input-field"
          ref={yearPublishedField}
          type="text"
          placeholder="Year Published"
        />
        <input
          className="collection-item-input-field"
          ref={languageField}
          type="text"
          placeholder="Language(s)"
        />
        <input
          className="collection-item-input-field"
          ref={descriptionField}
          type="text"
          placeholder="Description"
        />

        <input
          className="collection-item-input-field"
          ref={resourceTypeField}
          type="text"
          placeholder="Type (article, book, dissertation, etc.)"
        />
      </form>
    </>
  );
}

// Essentially, run a check if the collection name exists, if it does
