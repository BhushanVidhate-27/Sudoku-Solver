#!/bin/bash

set -e

# Project root
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"

# Go to project root
cd "$PROJECT_DIR"

# Setup Emscripten
echo "Setting up Emscripten..."

source "$PROJECT_DIR/emsdk/emsdk_env.sh"

echo "Emscripten:"
emcc --version

# Install frontend dependencies
echo ""
echo "Installing frontend dependencies..."

npm install

# Compile C++ → WebAssembly
echo ""
echo "Compiling C++ → WebAssembly..."

em++ "$PROJECT_DIR/src/components/sudoku/SUDOKU.cpp" \
    -O3 \
    --bind \
    -s MODULARIZE=1 \
    -s EXPORT_ES6=1 \
    -o "$PROJECT_DIR/src/sudoku.js"

echo ""

chmod +x run.sh
./run.sh