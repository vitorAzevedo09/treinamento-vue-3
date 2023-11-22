# Treinamento Vue 3

This project is a source code of the course that you are doing teaching Vue 3. It contains the code for all of the lessons in the course.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Make sure you have the following software installed on your machine:

- Node.js (version release)
- npm (version release)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/vitorAzevedo09/treinamento-vue-3.git
```

2. Run the backend using docker:

The backend of the project was copied fully from the oficial repository of the course [treiamento vuejs brasil](https://github.com/vuejs-br/treinamento-vue3-code).

```bash
    cd backend # navigate to the backend directory
    npm run build # build the backend project
```

This will start a backend development server that you can use to access the api that we gonna use.

3. Install the dependencies of project:
    This is the process installation of dashboard, can be generalized for any other frontend project folder.
    
```bash
    cd dashboard # navigate to the frontend project directory
    npm install # install the dependencies
```


## Usage

Run the backend development server:

```bash
    cd backend # navigate to the backend project directory
    npm run container # run the docker container
```

Run the frontend development server dashboard:

```bash
    cd dashboard # navigate to the dashboard project directory
    npm run dev # run the project using vite
```

## License

This project is licensed under the MIT License.
