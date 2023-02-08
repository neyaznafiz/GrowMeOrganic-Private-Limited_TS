import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { Box } from "@mui/material";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <Box>
      <RouterProvider router={routes} />
      <ToastContainer/>
    </Box>
  );
}

export default App;
