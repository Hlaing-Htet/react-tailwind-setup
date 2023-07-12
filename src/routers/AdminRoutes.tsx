import AdminLayOut from "@/layouts/AdminLayOut";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "admin",
    element: <AdminLayOut />,
  },
];
export default routes;
