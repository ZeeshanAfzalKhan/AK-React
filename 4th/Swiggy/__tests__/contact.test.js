import { render, screen } from "@testing-library/react";
import Contact from "../src/Pages/Contact";
import "@testing-library/jest-dom";

describe("Contact Page", () => {
  test("Should render a fully funtional contact page", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should have a form with 3 input fields and a button", () => {
    render(<Contact />);

    const inputFields = screen.getAllByRole("textbox");
    const button = screen.getByRole("button");

    expect(inputFields.length).toBe(3);
    expect(button).toBeInTheDocument();
  });
});

it("Should have a submit button", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});
