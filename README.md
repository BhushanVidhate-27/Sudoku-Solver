# Sudoku Solver

A fast and interactive Sudoku Solver built with **React**, **Vite**, **C++**, and **WebAssembly (WASM)**. The application provides a user-friendly interface for entering Sudoku puzzles and uses a high-performance C++ backtracking algorithm compiled to WebAssembly for solving them in the browser.

## Features

- 🧩 Solve any valid 9×9 Sudoku puzzle
- ⚡ High-performance C++ solver compiled to WebAssembly
- 🎨 Interactive and responsive React UI
- ❌ Input validation
- 🔄 Reset board functionality
- 📱 Responsive design for desktop and mobile
- 🚀 Runs completely in the browser

---

## Tech Stack

### Frontend
- React
- Vite
- JavaScript
- CSS

### Backend Logic
- C++
- WebAssembly
- Emscripten

---

## Project Structure

```
src/
│
├── components/
│   └── sudoku/
│       ├── input.jsx
│       ├── btn.jsx
│       ├── closeBtn.jsx
│       ├── info.jsx
│       ├── soln.jsx
│       ├── sudoku.jsx
│       ├── title.jsx
│       ├── sudoku.css
│       └── SUDOKU.cpp
│
├── wasm/
│   ├── sudoku.js
│   └── sudoku.wasm
│
├── App.jsx
└── main.jsx
```

---

## How It Works

1. The user enters a Sudoku puzzle in the web interface.
2. React validates the input.
3. The puzzle is passed to the WebAssembly module.
4. The C++ backtracking algorithm computes the solution.
5. The solved Sudoku is displayed instantly on the page.

---

## Algorithm

The solver uses the **Backtracking Algorithm**, a depth-first search technique that:

- Finds an empty cell.
- Tries numbers from 1 to 9.
- Checks whether the number satisfies Sudoku constraints.
- Recursively continues until the puzzle is solved.
- Backtracks whenever a conflict is encountered.

### Time Complexity

Worst Case:

```
O(9^(n²))
```

Although exponential in theory, backtracking efficiently solves most practical Sudoku puzzles.

---

## Installation

Clone the repository

```bash
git clone https://github.com/BhushanVidhate-27/Sudoku-Solver.git
cd sudoku-solver
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Open

```
http://localhost:5173
```

---

## Building the WebAssembly Module

Ensure **Emscripten SDK** is installed.

Compile the C++ source:

```bash
emcc SUDOKU.cpp \
-s MODULARIZE=1 \
-s EXPORT_ES6=1 \
-s EXPORTED_RUNTIME_METHODS=[] \
-s EXPORTED_FUNCTIONS='["_solveSudoku"]' \
-o sudoku.js
```

Move the generated files into

```
src/wasm/
```

which should contain

```
sudoku.js
sudoku.wasm
```

---

## Future Improvements

- Multiple solving algorithms
- Sudoku puzzle generator
- Difficulty levels
- Hint generation
- Animated solving visualization
- Performance statistics

---

## Author

**Varunraj surase**
**Bhushan Vidhate**

GitHub: 
https://github.com/BhushanVidhate-27
https://github.com/VarunRaj-Surase
---

## License

This project is licensed under the MIT License.
