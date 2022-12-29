import * as React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checked: boolean;
}

const RadioButton: React.FC<Props> = ({
  label,
  checked,
  onChange,
  ...rest
}) => {
  return (
    <form>
      <div className="radio">
        <label>
          <input type="radio" checked={checked} onChange={onChange} {...rest} />
          {label}
        </label>
      </div>
    </form>
  );
};

export default RadioButton;
