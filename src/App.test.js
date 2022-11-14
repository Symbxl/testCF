import { render, screen } from "@testing-library/react";
import App from "./App";

test.only("renders learn roles link", () => {
  render(<App />);
  const linkElement = screen.getByRole("link", { name: /role definitions/i });
  expect(linkElement).toBeVisible(); // assertions
});
