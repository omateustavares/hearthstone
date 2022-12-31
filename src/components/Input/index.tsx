import { ForwardRefRenderFunction, InputHTMLAttributes, useRef } from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import { Container, Error, Content } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  control: Control<any>;
  name: string;
}

const InputForm: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  error,
  name,
  control,
  ...rest
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <Content>
        <Container isInvalid={!!error}>
          <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value } }) => (
              <input
                ref={inputRef}
                onChange={onChange}
                value={value}
                {...rest}
              />
            )}
          />
        </Container>
        {error && <Error>{error.message}</Error>}
      </Content>
    </>
  );
};

export default InputForm;
