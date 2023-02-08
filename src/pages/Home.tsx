import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import DataTable from "../components/DataTable";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  // get user info from local storage
  const user: string | null = localStorage.getItem("user");

  // navigate to authentication page if user info does'n exist in local storage
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
    <Box>

      <TopBar/>
      
      <Box sx={{ height: 840, width: "100%", display: "flex", gap: 2 }}>
        <Sidebar />
        <DataGrid
          rows={data}
          columns={DataTable}
          rowsPerPageOptions={[5]}
          experimentalFeatures={{ newEditingApi: true }}
          sx={{ padding: 1 }}
        />
      </Box>
    </Box>
  );
};

export default Home;
