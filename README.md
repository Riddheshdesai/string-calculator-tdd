# String Calculator

![String Calculator](https://github.com/Riddheshdesai/string-calculator-tdd/blob/develop/src/assets/string-calculator.jpg)

A simple String Calculator built with React and Vite, following Test-Driven Development (TDD) principles. This project implements a string calculator that supports multiple features, including basic arithmetic, custom delimiters, and error handling for negative numbers.

## Features

- **Handles Empty Strings:** Returns `0` for an empty input.
- **Single Number Input:** Returns the number itself when a single number is provided.
- **Two or More Numbers:** Supports addition of two or more comma-separated numbers.
- **Newline as Delimiter:** Allows numbers separated by commas or newlines.
- **Custom Delimiters:** Supports custom delimiters specified in the input.
- **Error Handling:** Throws an error for negative numbers.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Riddheshdesai/string-calculator-tdd.git
   ```

2. Navigate to the project directory:

   ```bash
   cd string-calculator-tdd
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

To start the development server, run:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

### Running Tests

To run the tests, use the following command:

```bash
npm test
```

This will execute all the tests in the project to ensure everything is working as expected.


### Example Usage

- **Input:** `1,2`  
  **Output:** `3`

- **Input:** `//;\n1;2`  
  **Output:** `3`

- **Input:** `1\n2,3`  
  **Output:** `6`

- **Input:** `1,-2,3`  
  **Output:** `Error: negative numbers not allowed: -2`

## Conclusion

This project showcases the implementation of a string calculator using TDD principles, ensuring a robust and reliable solution. The code follows a clear Red-Green-Refactor cycle, with tests written before implementing functionality.

