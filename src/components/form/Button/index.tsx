import { Button as ChakraButton } from "@chakra-ui/react";
import { ButtonProps } from "./interface";

export function Button({ children, ...rest }: ButtonProps): JSX.Element {
  return (
    <ChakraButton
      color="white"
      background="purple.600"
      _hover={{
        background: "purple.700"
      }}
      _active={{
        background: "purple.700"
      }}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
}