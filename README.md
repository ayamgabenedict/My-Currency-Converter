# REACT Currency Converter

## What is this project about?

This Currency Converter project offers users the opportunity to convert from one currency to the other.
This project is built with [React](https://react.dev) JS library and the [Vite](https://vitejs.dev) bundler, using [Tailwindcss](https://tailwindcss.com) for the styles.

# Getting Started

#### Installing Dependencies

1.  **Installing Node and NPM**
    This project builds on top of Nodejs and Node Package Manager (NPM). Before continuing, you must download and install Node (the download includes NPM) from [https://nodejs.com/en/download](https://nodejs.org/en/download/).

2.  **Installing project dependencies**
    To get started with Vite, follow these steps:

    Install Vite: You can install Vite using npm (Node Package Manager). Open your terminal and run the following command:

    ```bash
    npm install vite@latest
    ```

    The project further uses NPM to manage software dependencies. NPM Relies on the package.json
    Open your terminal and run:

    ```bash
    npm install
    ```

    > _tip_: `npm i` is shorthand for `npm install``

    To get started with Tailwind css, follow these steps:

    Install Tailwindcss: Navigate to the Docs page of the [Tailwindcss](https://tailwindcss.com) home page.

    Select your framework of choice from the [Installation](https://tailwindcss.com/docs/installation) heading on the above page, and follow the instructions over there.

### Running Your Frontend in Dev Mode

The frontend app was built using the React Library with Vite (as the bundler). In order to run the app in development mode use `npm run dev`.

Open [http://localhost:5173](http://localhost:) to view it in the browser. The page will reload if you make edits.

```bash
npm run dev
```

## Contributions

1. Refactored the code for optimization such as:
   1. Built a custom hook `useCurrencyInfo` to handle currency information.
   1. used the `useMemo` hook to memoize the <b>formattedClassName</b> and <b>currencyOptionsList</b>, thus preventing unnecessary re-renders when their dependencies stayed the same.
   1. Used the `useState` hook to manage the <b>amount</b> state locally for better performance and control.
   1. Combined <b>input</b> value handling and `onAmountChange` within `handleAmountChange` for a more concise approach.
   1. Used a ternary operator to display an empty string for `amount` when it equalled zero, thus streamlining conditional rendering.
   1. Checked for the existence of `onAmountChange` and `onCurrencyChange` before invoking them thereby preventing potential errors had those functions not existed.
   1. Added <b>error handling mechanism</b> to gracefully handle errors and give some user feedback.
2. Added the "Reset" button so that the user doesn't have to use the browser's refresh button
3. Improved CSS for more UX 😊😊😊

## Acknowledgements

- [Hitesh Choudhary](https://hiteshchoudhary.com/) This project was developed as part of a React Video tutorial on [Youtube](https://www.youtube.com/watch?v=4DqAvWonPAg).
