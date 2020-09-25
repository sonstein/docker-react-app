import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/제대로 리액트 배워보자./i);
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/제대로 리액트 배워보자./i);
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/제대로 리액트 배워보자./i);
  expect(linkElement).toBeInTheDocument();
});
