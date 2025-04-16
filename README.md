# Owndr

An application to show users' reviews of wonderful places in the world. We want genuine and verified reviews!
So, we build this app for the sake of authenticity.

<!-- TOC -->

- [Owndr](#owndr)
  - [Technical Decisions](#technical-decisions)
    - [React Router](#react-router)
    - [MariaDB and Drizzle ORM](#mariadb-and-drizzle-orm)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Development](#development)
  - [Building for Production](#building-for-production)
  - [Contributing](#contributing)
    - [Project Structure](#project-structure)
    - [File Naming Convention](#file-naming-convention)
    - [Submitting a New Feature](#submitting-a-new-feature)
      - [Writing Client Code](#writing-client-code)
      - [Writing Server Code](#writing-server-code)
    - [Submitting a Pull Request](#submitting-a-pull-request)
  - [Deployment](#deployment)
  - [TODO](#todo)
  <!-- TOC -->

## Technical Decisions

This project aims to make developer ship the Owndr faster and reduce friction between developers to decide tools and libraries.
Therefore, we empower this starter with these following technologies

- React + React Router v7 as full-stack web framework,
- Lightweight, server-client and production ready MariaDB database,
- GitHub Actions for running test and deploy to staging and production environments,
- Simple but powerful authentication powered-by Remix Auth,
- Component based email templates with react-mail,
- Powerful database ORM by drizzle ORM,
- Styling with Tailwind and shadcn/ui components,
- Code formatting with Prettier,
- Linting with ESLint,
- Type-safe runtime validation with zod

### React Router

In React Router v7, they provide two different options on how we handle the routes within the application, which are framework and library mode.
The framework mode offers full-featured React framework that can be used as full-stack web framework.
On the contrary, library mode is a traditional method in the React Router that has been used by many people in the earlier version of this library,
and it stores the routes declaratively.

Since we want simplicity in our application, in this case, we chose framework mode. It offers several different ways to declare routing, those are a file-based, config-based or the combination of both of them.
We really want the developers able to work in separate domain features and reduce the conflict when they start working on. So, we enabled the file-based routing by installing `@react-router/fs-routes` and organize the routes based on their features or domains.

### MariaDB and Drizzle ORM

_TBD_

## Getting Started

### Prerequisites

- Node
- pnpm
- Wrangler CLI

### Installation

Install the dependencies

```bash
pnpm install
```

### Development

Start the development server with HMR

```bash
pnpm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build

```bash
pnpm run build
```

## Contributing

### Project Structure

_TBD_

### File Naming Convention

Due to the flexibility of JavaScript-based application, there are no restrictions to write a name on the file. Therefore, to prevent inconsistencies among the other files and the base ui components, preferably to write using kebab-case. Everything should be lowecase first, and if the name consists of multiple words, concat the words using hypen (-) and keep the name lowecase. This naming was chosen because the readablity of the filename. In contrast of the PascalCase or camelCase, both of those less readable because there are no spaces among the words if there are multiple words on it.

### Submitting a New Feature

Since we are using React Router v7 which considered as full-stack framework, we now need to consider on how to separate the client and server side code.

#### Writing Client Code

Writing a client component is really simple in React Router, you can just follow [the file route conventions](https://reactrouter.com/how-to/file-route-conventions#escaping-special-characters) and export the default function.
In this project structure, any files inside the app folder without `.server` suffix, will be marked as client-side code, it is safe for us to use it across the client components.

#### Writing Server Code

Server code is just plain JavaScript/TypeScript source code. It doesn't have fancy things to do, except for handling data through database integration or third-party services.
In React Router v7, we can just write the logic inside `loader` function and return the data to a React component. However, it considered as impractical because it can tightly coupled the logic and view.
Therefore, separating the logic as server function from the `loader` will give us flexibility to handle the logic.

Another solution is separating the logic by creating resources routes. In this way, we can also expose it as API routes that can be consumed by another platform, such as a mobile app.
You can read more detail about resources routes and the pattern to implement it in Kent C. Dodds's article &mdash; [Full Stack Components](https://www.epicweb.dev/full-stack-components).

### Submitting a Pull Request

Since the `main` branch is protected, we can't push directly to that branch. Each developers should send their contribution through GitHub's pull request and fill the proper description on the text box. We will provide the pull request template and developers can use it as references what is the minimum information that they should give to the maintainer.

Each pull request should have single approval at minimum to be able to merge to the `main` branch. There will be an exception for the maintainer, they can bypass the rules and merge the pull request directly without approval. This will make them to be able to configure the repository properly, such as adding Actions or any configuration files.

## Deployment

_TBD_

## TODO

- [ ] Add testing libraries,
- [ ] Write an ERD for structuring the data,
- [x] Setup authentication and integrate with Google Signin using [remix-auth](https://github.com/sergiodxa/remix-auth),
- [ ] Setup [cachified](https://github.com/epicweb-dev/cachified) for handle caches,
- [x] Add [conform](https://conform.guide/) as form helper,
- [ ] Setup GitHub Actions with the following specifications
  - [ ] Run unit and integration tests along with linter when contributors start creating pull request,
  - [ ] Create separate workflow to push the code into CloudFlare pages.
- [x] Protect `main` branch and add one mandatory reviewer in the pull request,
- [ ] Setup [react-mail](https://react.mail) and [Nodemailer](https://nodemailer.com/) libraries for handling emails,
- [x] Create a CRUD sample to demonstrate the data flow pattern within the application.
- [x] Setup CloudFlare infrastructure,
- [ ] Setup deployment
