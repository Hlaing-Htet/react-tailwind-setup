import AdminLayOut from "@/layouts/AdminLayOut";
import { RouteObject } from "react-router-dom";

const AdminRoutes: RouteObject[] = [
  {
    path: "admin",
    element: <AdminLayOut />,
  },
];
export default AdminRoutes;
