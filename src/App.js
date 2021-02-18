import logo from "./logo.svg";
import "./App.css";
import { Paper, Button, Divider, Tabs, Tab } from "@material-ui/core";
import { useState } from "react";
import LatestTX from "./pages/latestTX";
import LossCalc from "./pages/lossCalc";

function App() {
  const [PageState, setPageState] = useState(<LatestTX></LatestTX>);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue == 0) setPageState(<LatestTX></LatestTX>);
    else if (newValue == 1) setPageState(<LossCalc></LossCalc>);
  };

  const header = (
    <Paper
      style={{
        backgroundColor: "lightgray",
        width: "100vw",
        height: 30,
        display: "flex",
        flexDirection: "row",
        flexGrow: "initial",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p>1Inch</p>
      <img
        src="https://avatars.githubusercontent.com/u/43341157?s=200&v=4"
        style={{ width: 30 }}
      ></img>
      <p>Profit</p>
    </Paper>
  );

  return (
    <div>
      <Paper
        style={{
          width: "100vw",
          minHeight: "100vh",
          backgroundColor: "#282c34",
          textAlign: "center",
        }}
      >
        {header}
        <Paper
          style={{
            width: "40vw",
            minHeight: "70vh",
            position: "relative",
            top: 120,
            left: 600,
            backgroundColor: "lightgray",
            maxHeight: 200,
            overflow: "auto",
            overflowX: "hidden",
          }}
        >
          <Paper square>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              centered
            >
              <Tab label="Latest Transactions" />
              <Tab label="Loss Calculator" />
            </Tabs>
          </Paper>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              position: "relative",
              top: 0,
              left: 180,
            }}
          >
            {PageState}
          </div>
        </Paper>
      </Paper>
    </div>
  );
}

export default App;
