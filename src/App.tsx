import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Route, Routes, useRoutes } from "react-router-dom";
import AdminRoutes from "@/routers/AdminRoutes";
const queryClient = new QueryClient();
const App = () => {
  const AdminRouting = useRoutes(AdminRoutes);
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<div>hi</div>} />
        <Route path="/admin/*" element={AdminRouting} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
