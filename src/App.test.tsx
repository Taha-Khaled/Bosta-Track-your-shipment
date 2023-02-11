import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render App successfully", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("App")).toBeInTheDocument();
  });
});
