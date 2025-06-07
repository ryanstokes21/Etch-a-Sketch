# Etch-a-Sketch

This is a browser-based Etch-a-Sketch built with HTML, CSS, and JavaScript. It allows users to draw on a grid by moving their mouse across it, and features dynamic grid resizing and colorful drawing effects.

## Features

- ✅ Hover to draw on the grid
- ✅ Generates a dynamic grid based on user input
- ✅ Random RGB color mode
- ✅ Clear and responsive layout using Flexbox
- ✅ Prompt-based grid resizing (up to 100x100)

## How It Works

- The grid is made up of square `<div>` elements created with JavaScript.
- Flexbox is used to wrap squares in a container (`#container`) and maintain uniform layout.
- Each square listens for `mousemove` events to change its background color.
- A button lets the user reset the grid size via a `prompt()` input.
- Colors are randomly generated using a custom `getRandomColor()` function.

## Technologies Used

- HTML
- CSS
- JavaScript (vanilla)

## Live Demo

_Coming soon... (or you can open the `index.html` file locally to test it)_

---
