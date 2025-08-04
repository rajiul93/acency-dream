import { ThemeProvider } from "@material-tailwind/react";
// import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { router } from "./Router/Router.jsx";
import "./index.css";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <ThemeProvider>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </ThemeProvider>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>

//     <ThemeProvider>
//       <AuthProvider>
//       <QueryClientProvider client={queryClient}>

//       <RouterProvider router={router} />
//       </QueryClientProvider>
//       </AuthProvider>
//     </ThemeProvider>

//   </React.StrictMode>
// );
