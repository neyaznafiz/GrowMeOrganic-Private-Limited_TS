import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { Box } from "@mui/material";

const App: React.FC = () => {
  return (
    <Box>
      <RouterProvider router={routes} />
    </Box>
  );
}

export default App;
