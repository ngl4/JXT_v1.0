import { render, screen } from "@testing-library/react";
import App from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("renders the banner and links", () => {
  render(<App />);
  expect(screen.getByRole("banner")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Enter" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Track" })).toBeInTheDocument();
});
