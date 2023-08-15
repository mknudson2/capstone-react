import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Sidebar from "./Sidebar";

interface BodyProps {
  sidebar: boolean;
  children: JSX.Element | JSX.Element[];
}

export default function Body({ sidebar, children }: BodyProps) {
  return (
    <Stack direction="horizontal">
      {sidebar && <Sidebar />}
      <Container>{children}</Container>
    </Stack>
  );
}
