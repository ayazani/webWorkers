import App from "../App";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import NoWorkerPage from "../pages/NoWorker.page";
import SharedWorkerPage from "../pages/SharedWorker.page";
import DedicatedWorkerPage from "../pages/DedicatedWorker.page";

const routes: RouteObject[] = [
  {
    element: <App />,
    children: [
      {
        path: "",
        element: <NoWorkerPage />,
      },
      {
        path: "dedicatedWorker",
        element: <DedicatedWorkerPage />,
      },
      {
        path: "sharedWorker",
        element: <SharedWorkerPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes, {
  basename: "/webWorkersExamples",
});
