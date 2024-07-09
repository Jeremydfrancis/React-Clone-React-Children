import * as React from "react";
import "./styles.css";

export const RadioGroup = ({ onChange, selected, children }) => {
  const RadioOptions = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      checked: child.props.value === selected,
      onChange: () => onChange(child.props.value),
    });
  });

  return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  return (
    <div className="RadioOption">
      <input id={value} type="radio" name="radioGroup" value={value} checked={checked} onChange={onChange} />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
