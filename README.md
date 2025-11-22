# AlgoCasts

This repository contains a collection of algorithm and data structure exercises implemented in JavaScript.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following software installed on your system:

*   **Node.js**: [Download Node.js](https://nodejs.org/) (v14.x or higher recommended)

### Installation

Follow these steps to set up the project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/N-Jadav/Data-Structures-Algorithms.git
    cd Data-Structures-Algorithms
    ```

2.  **Install dependencies:**
    Navigate to the `DSA` directory where the package configuration is located.
    ```bash
    cd DSA
    npm install
    ```

## Running Tests

This project uses **Jest** for testing. Each exercise has its own test file.

### Running All Tests

To execute the entire test suite (all exercises):

```bash
# From the exercises directory
npx jest
```

### Running Individual Tests

You can run tests for a specific exercise by passing the directory name to Jest.

*   **To run tests for a specific exercise (e.g., `secondmax`):**
    ```bash
    # From the exercises directory
    npx jest secondmax
    ```

*   **To run a specific test file:**
    ```bash
    npx jest secondmax/test.js
    ```

*   **To run a specific test case:**
    ```bash
    npx jest secondmax -t "should return the second maximum element"
    ```
