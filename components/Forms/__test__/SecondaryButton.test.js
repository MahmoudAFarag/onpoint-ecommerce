import { render } from "@testing-library/react";
import SecondaryButton from "../SecondaryButton";

describe("SecondaryButton", () => {
  it("should find/render button", () => {
    const { getByRole } = render(<SecondaryButton txt="sign in" />);
    const buttonElement = getByRole("button", {
      name: /sign in/i,
    });
    expect(buttonElement).toBeInTheDocument();
  });
});
