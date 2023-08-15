import { useState } from "react";
import Container from "react-bootstrap/Container";

interface displayWhiteboardableProps {
  students: string[];
}

export default function Whiteboard({ students }: displayWhiteboardableProps) {
  const [whiteboardStudent, setWhiteboardStudent] = useState("sima");

  return (
    <Container>
      <p>Today's whiteboard was performed by {whiteboardStudent}</p>
      <button
        onClick={() => {
          setWhiteboardStudent(
            students[Math.floor(Math.random() * students.length)]
          );
        }}
      >
        Update Whiteboard Student
      </button>
    </Container>
  );
}
