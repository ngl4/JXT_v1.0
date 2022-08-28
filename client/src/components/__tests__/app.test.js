import { render, screen, cleanup } from "@testing-library/react";
import App from "../../App";

test("renders the landing page", () => {
  render(<App />);
  expect(screen.getByRole("banner")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Enter" })).toBeInTheDocument();
});
