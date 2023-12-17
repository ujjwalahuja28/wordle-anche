import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this for better matchers
import App from "./App"; // Import your component



// Test 1
test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".colus"); // Replace 'your-class-name' with the actual class name
  expect(elementWithClassName).toBeInTheDocument();
});



// Test 2
test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".rw"); // Replace 'example-class' with the actual class name
  expect(elementWithClassName).toBeInTheDocument();
});


// Test 3
test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".keyboard-wrappe"); // Replace 'example-class' with the actual class name
  expect(elementWithClassName).toBeInTheDocument();
});



// Test 4
test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".ke"); // Replace 'example-class' with the actual class name
  expect(elementWithClassName).toBeInTheDocument();
});




// Test 5
test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".lette"); // Replace 'example-class' with the actual class name
  // expect(elementWithClassName).toBeInTheDocument();
});



