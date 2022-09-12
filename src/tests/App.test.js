import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders Purchases header", () => {
  render(<App />);
  const linkElement = screen.getByText(/Purchases/i);
  expect(linkElement).toBeInTheDocument();
});
