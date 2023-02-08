import React from "react";
import { Data } from "../types/DataTypes";

const DataTable: Data[] = [
  { field: "id", headerName: "ID", width: 90, },
  {
    field: "title",
    headerName: "Title",
    width: 550,
  },
  {
    field: "body",
    headerName: "Details",
    width: 900,
  },
];

export default DataTable;
