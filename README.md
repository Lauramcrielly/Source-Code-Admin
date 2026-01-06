# Tapptitude react template

## Description

This repository is an Admin Panel built with [React](https://react.dev/). Pages included:

- Login
- Users
- User details
- Demos

## First time setup

1. Install [Node.js](https://nodejs.org/en/download/)
2. Install dependencies by running `npm install`
3. Run the app by running `npm run dev` for a dev server. Navigate to `http://localhost:5173/` or press `o` while in console to access the app. The app will automatically reload if you change any of the source files.

Different environments use different values for the environment variables. The configuration is found in the `.env` file. Based on the configuration, the app will use the correct environment variables.

## Building for different environments

To build the project using default variables (`.env`), run `npm run build`.

To build for development using development variables (`.env.dev`), run `npm run build:dev`.

To build for staging using staging variables (`.env.staging`), run `npm run build:staging`.

The build artifacts will be stored in the `dist/` directory.

## Deployment / Bitbucket pipelines

The app is currently configured to use Bitbucket pipelines to build and deploy the app to the different environments. The configuration is found in the `bitbucket-pipelines.yml` file.

The basic steps performed by the pipeline are:

1. Install dependencies (`npm install`)
2. Build the app (`npm run build`)

The entry point for the app will be found in `dist/index.html`. The app is built using vite. The vite configuration is found in the `vite.config.ts` file.

You can host the built app on any static hosting service, using a simple http server (test it using `npx http-server` from the `/dist` directory)

## Structure

- **src/**
  - **components/** - add here reusable components that are tied to your logic / models, like a product card
    - **ui/** - add here generic components like buttons, accordions, ...
      - **styles.css** - styles for custom tapp components
      - **utils.ts** - utils for [shadcn-ui](https://ui.shadcn.com/) and tapp components
      - **hooks/** - util hooks
      - **Tapp[Component]/** - custom tapp components
  - **lib/** - add here stores, like zustand stores, jotai atoms, ...
    - **models/** - add here your custom backend models
    - **utils/** - utils related to your app logic
  - **pages/** - add here your main pages
    - **/route** - match the route used in the url
      - **page.tsx** - main page content (next.js naming convention)
      - **layout.tsx** - shared layout (next.js naming convention)
  - **\_\_error.tsx** - when an uncaught error is thrown, this component is shown
  - **\_\_root.tsx** - add here any top level providers
  - **config.ts** - add here env variables
  - **globals.css** - global css styles including custom colors
  - **main.tsx** - init react app and react router
  - **routes.tsx** - define your app routes here
- **components.json** - [shadcn-ui](https://ui.shadcn.com/) components configuration
- **index.html** - root html layout

Visual representation of the structure:

.
├── public
└── src
├── components
│ └── ui
│ ├── TappAvatar
│ ├── TappDateFilter
│ ├── TappDateInput
│ ├── TappDateRangeFilter
│ ├── TappDateRangeInput
│ ├── TappFormField
│ ├── TappIcon
│ ├── TappInput
│ ├── TappInputError
│ ├── TappInputFilter
│ ├── TappLabel
│ ├── TappLink
│ ├── TappMenu
│ ├── TappPageHeader
│ ├── TappPaginator
│ ├── TappPasswordInput
│ ├── TappPill
│ ├── TappPopover
│ ├── TappProvider
│ ├── TappSelect
│ ├── TappSelectFilter
│ ├── TappSidebar
│ ├── TappTable
│ ├── TappUIShell
│ ├── \_Template
│ └── hooks
├── lib
│ ├── models
│ └── utils
└── pages
├── admin
│ ├── demos
│ │ ├── components
│ │ ├── filters
│ │ └── forms
│ └── users
│ └── [id]
└── login

## Components

The templates comes with several reusable components out of the box (run the app, login and go to /admin/demos/components).

For additional generic components, the project is configured to work with [shadcn-ui](https://ui.shadcn.com/). This project will install components in your projects, in the `/src/components/ui` directory. (For an example, check out `/src/components/ui/button.tsx`)

## 3rd party libraries

- Routing: [React router](https://reactrouter.com/en/main)
- Global state / stores: [Zustand](https://github.com/pmndrs/zustand)
- Query management: [Tanstack query](https://tanstack.com/query/latest)
- Form state: [React hook form](https://react-hook-form.com/)
- Form validation: [Zod](https://zod.dev/)
- Date manipulation: [Day.js](https://day.js.org/)
- Pre-commit hooks: [Husky](https://github.com/typicode/husky) - run git pre-commit hooks for formatting code with prettier
- Code formatting: [Prettier](https://prettier.io/)
- Animations: [Framer motion](https://www.framer.com/motion/)
- Component libraries: [Shadcn-ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/), [Tanstack Table](https://tanstack.com/table/latest), [React Select](https://react-select.com/), [React DayPicker](https://react-day-picker.js.org/), [Headless UI](https://headlessui.com/), [Class Variance Authority](https://cva.style/docs)
- ...and others for specific use cases

## Improving readme file

If you have any suggestions on how to improve this readme file, please open a pull request with your changes.
