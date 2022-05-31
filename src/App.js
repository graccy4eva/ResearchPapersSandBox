import React, { useState, useEffect } from "react";
import "./styles.css";
import { DataGrid } from "@mui/x-data-grid";
import * as d3 from "d3";
import logo from "./logo.jpg";
const columns = [
  { field: "Id", hide: true, identity: true },
  //{ field: "_id", hide: true },
  { field: "Title", headerName: "Title", width: 300 },
  { field: "User", headerName: "User", width: 300 },
  { field: "Task", headerName: "Task", width: 300 },
  { field: "Chart_Type", headerName: "Chart Type", width: 300 },
  { field: "Interaction", headerName: "Interaction", width: 300 },
  {
    field: "Information_Granularity",
    headerName: "Information Granularity",
    width: 600
  },
  { field: "Sensory_Modality", headerName: "Sensory Modality", width: 600 },
  {
    field: "Assistive_Technology",
    headerName: "Assistive Technology",
    width: 600
  },
  { field: "Contribution_Type", headerName: "Contribution Type", width: 600 },
  { field: "Perception_Channel", headerName: "Perception Channel", width: 600 },
  { field: "Year", headerName: "Year", width: 300 },
  { field: "Venue", headerName: "Venue", width: 300 },
  { field: "Keywords", headerName: "Keywords", width: 400 },
  { field: "DOI", headerName: "DOI", width: 600 }
];

App = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    d3.csv(
      "https://raw.githubusercontent.com/graccy4eva/ResearchPapersRepository/main/public/paper-collection-2.csv"
    ).then((d) => {
      setTableData(d);
    });
    //return () => undefined;
  });

  console.log(tableData);

  return (
    <div style={{ height: 700, width: "100%" }}>
      <div className="App">
        <h1>
          <img src={logo} className="App-logo" />
          College Paper Repository
        </h1>
      </div>
      <div>
        <h1>Welcome! Explore a collection of papers in our repository </h1>
      </div>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={12}
        getRowId={(row) => row.Id}
      />
    </div>
  );
};

export default App;
