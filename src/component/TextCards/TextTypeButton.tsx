// TextTypeButton.tsx
import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function TextTypeButton({ selectedTextType, onTextTypeClick }) {
  const handleButtonClick = (textType) => {
    onTextTypeClick(textType);
  };

  return (
    <ButtonGroup size="lg" className="mb-2">
      <Button
        variant="primary"
        className={`text-type-btn ${
          selectedTextType === "Prose" ? "active" : ""
        }`}
        onClick={() => handleButtonClick("Prose")}
      >
        Prose
      </Button>
      <Button
        variant="primary"
        className={`text-type-btn ${
          selectedTextType === "Poetry" ? "active" : ""
        }`}
        onClick={() => handleButtonClick("Poetry")}
      >
        Poetry
      </Button>
    </ButtonGroup>
  );
}

export default TextTypeButton;
