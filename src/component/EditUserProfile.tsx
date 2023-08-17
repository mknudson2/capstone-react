import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

interface ProfileModalProps {
  show: boolean;
  onHide: () => void;
}

const EditUserProfile: React.FC<ProfileModalProps> = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form action="">
          <label htmlFor="">
            <h3>Areas of Interest | Specializations</h3>
            <p>
              Choose up to include up to five areas or specializations to
              showcase
            </p>
          </label><br/>
          <input type="text" className="profile-area-edit-fields"/><br/>
          <input type="text" className="profile-area-edit-fields"/><br/>
          <input type="text" className="profile-area-edit-fields"/><br/>
          <input type="text" className="profile-area-edit-fields"/><br/>
          <input type="text" className="profile-area-edit-fields"/><br/>
          <br/>
          <label htmlFor="">
            <h3>Open to collaboration?</h3>
          </label>
          <input type="checkbox" className="edit-profile-collab-check"/><br/><br/><br/>
          <label htmlFor=""><h3>Upload a profile picture</h3></label><br/><br/>
          <input type="file" id="profile-picture" name="profile-picture" accept="image/png, image/jpeg" />
        </form>
        {/* Form fields for user to fill in extra information */}
        {/* You can add form inputs here for specializations, profile picture, etc. */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary">Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditUserProfile;
