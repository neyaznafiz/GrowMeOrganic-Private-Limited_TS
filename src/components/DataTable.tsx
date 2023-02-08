import React from 'react';

const DataTable =  [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'title',
      headerName: 'Title',
      width: 550,
      editable: true,
    },
    {
      field: 'body',
      headerName: 'Details',
      width: 1200,
      editable: true,
    },
]

export default DataTable;