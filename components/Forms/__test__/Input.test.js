import { render, fireEvent } from "@testing-library/react";
import { useState } from "react";
import Input from "../Input";

const InputCheck = ({
  type = "email",
  label = "email",
  placeholder = "Email",
}) => {
  const [value, setValue] = useState("");
  return (
    <Input
      type={type}
      label={label}
      placeholder={placeholder}
      value={value}
      change={setValue}
    />
  );
};

describe("Input", () => {
  it("should find/render Input Label", () => {
    const { getByText } = render(<InputCheck />);
    const labelElement = getByText(`email :`);
    expect(labelElement).toBeInTheDocument();
  });

  it("should find/render Input Email", () => {
    const { getByPlaceholderText } = render(<InputCheck />);
    const inputElement = getByPlaceholderText(/Email/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should find/render Input By Type email", () => {
    const { getByRole } = render(<InputCheck />);
    const inputElement = getByRole("textbox", {
      name: `email :`,
    });
    expect(inputElement).toBeInTheDocument();
  });

  it("should fire Input Event Change", () => {
    const { getByPlaceholderText } = render(<InputCheck />);

    const inputElement = getByPlaceholderText(/Email/i);

    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: "example@mail.com" } });
    expect(inputElement.value).toBe("example@mail.com");
  });
});
