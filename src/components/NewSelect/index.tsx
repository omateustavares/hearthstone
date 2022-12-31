import {
  forwardRef,
  ForwardRefRenderFunction,
  SelectHTMLAttributes,
} from "react";
import { Control, Controller } from "react-hook-form";

import { Select, Option, Error, Container } from "./styles";

interface OptionProps {
  label: string;
  value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  values: OptionProps[] | undefined;
  name: string;
  error?: string;
  control: Control<any>;
}

const NewSelectBase: ForwardRefRenderFunction<
  HTMLSelectElement,
  SelectProps
> = (
  { values, placeholder, error, name, control, ...rest }: SelectProps,
  ref
) => {
  return (
    <Container>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Select
            isInvalid={!!error}
            ref={ref}
            value={value}
            onChange={onChange}
            {...rest}
          >
            <Option value="" disabled selected>
              {placeholder}
            </Option>

            {values.map((option) => (
              <Option key={option.label} value={option.label}>
                {option.value}
              </Option>
            ))}
          </Select>
        )}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export const NewSelect = forwardRef(NewSelectBase);
