import { render } from "@testing-library/react";
import FormLegend from "../FormLegend";

it("Form Legend Check Output", () => {
  const text = "sign in";
  const { getByText } = render(<FormLegend txt={text} />);
  const legendElement = getByText(text);
  expect(legendElement).toBeInTheDocument();
});
