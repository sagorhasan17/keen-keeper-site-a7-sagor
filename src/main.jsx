import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import FriendContextProvider from "./context/FriendContextProvider";
import "./index.css";
import { router } from "./routes/MainRoute";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendContextProvider>
      <RouterProvider router={router} />
    </FriendContextProvider>
  </StrictMode>,
);
