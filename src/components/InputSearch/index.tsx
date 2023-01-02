import React, { InputHTMLAttributes, useRef } from "react";
import { Container } from "./styles";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  error?: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
  name,
  type,
  value,
  onChange,
  error,
  ...rest
}) => {
  const input = useRef<HTMLInputElement>(null);

  function toggleFocus(): void {
    input.current?.focus();
  }

  return (
    <Container onClick={toggleFocus}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        ref={input}
        {...rest}
      />
    </Container>
  );
};

export default SearchInput;
