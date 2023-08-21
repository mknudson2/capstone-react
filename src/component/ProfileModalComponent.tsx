import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

interface ProfileModalContentProps {
  onSave: (data: any) => void;
  onClose: () => void;
}

export default function ProfileModalContent({
  onSave,
  onClose,
}: ProfileModalContentProps) {
  const [specializations, setSpecializations] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [collaborationToggle, setCollaborationToggle] = useState(false);

  console.log(setSpecializations)
  console.log(setProfilePicture)
  console.log(setCollaborationToggle)


  const handleSave = () => {
    const newData = {
      specializations,
      profilePicture,
      collaborationToggle,
    };

    onSave(newData);
    onClose();
  };

  return (
    <Modal.Body>
      {/* Input fields for specializations, profile picture, and collaboration toggle */}
      {/* Remember to add onChange handlers to update the corresponding state */}
      {/* Example:
      <input
        type="text"
        value={specializations}
        onChange={(e) => setSpecializations(e.target.value)}
      />
      */}
      <Button onClick={handleSave}>Save</Button>
      <Button onClick={onClose}>Cancel</Button>
    </Modal.Body>
  );
}
