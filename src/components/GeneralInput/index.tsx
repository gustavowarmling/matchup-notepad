import { Input } from "@chakra-ui/react";

type GeneralInputProps = {
  placeholder: string;
  type: string;
};

export function GeneralInput({ placeholder, type }: GeneralInputProps) {
  return <Input placeholder={placeholder} type={type} color="white" />;
}
