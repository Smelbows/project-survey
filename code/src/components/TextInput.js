import React from "react";

const TextInput = ({ label, value, onValueChange, valid }) => {
  const onTextInputChange = (event) => {
    onValueChange(event.target.value);
  };

  return (
    <>
      <label className="visuallyhidden" htmlFor={label}>{label}</label>
      <input
        className={`text-input valid-${valid}`}
        placeholder={valid ? "Type here..." : "Required field"}
        type="text"
        id={label}
        onChange={onTextInputChange}
        value={value}
      />
    </>
  );
};

export default TextInput;
