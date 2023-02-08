import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import DataTable from "../components/DataTable";

const Home: React.FC = () => {
  const [data, setData] = useState([]);

  // get user info from local storage
  const user: string | null = localStorage.getItem("user");
  // navigate to authentication page if user does'n exist in local storage
  const navigate = useNavigate();
  if (!user) {
    navigate("/authentication");
  }

  // data fetch
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <Box sx={{ height: 900, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={DataTable}
        rowsPerPageOptions={[5]}
        experimentalFeatures={{ newEditingApi: true }}
        sx={{ padding: 1 }}
      />
    </Box>
  );
};

export default Home;
