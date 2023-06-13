import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { StarWars } from "./pages/StarWars";
import { Episode } from "./pages/Episode";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

// const lightTheme = createTheme({
//   mode: "light",
// });

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/starwars",
    element: <StarWars />,
  },
  {
    path: "/episode/:id/",
    element: <Episode />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
