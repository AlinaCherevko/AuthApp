import { Button } from "@chakra-ui/react";
import { GoogleProps } from "../../types/types";

function GoogleBtn({ handleClick }: GoogleProps) {
  return (
    <Button type="button" onClick={() => handleClick()}>
      Continue with Google
    </Button>
  );
}

export default GoogleBtn;
