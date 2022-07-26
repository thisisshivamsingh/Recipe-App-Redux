import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));

function App() {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  return (
    <div className="App">
      <h2>Recipe App</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ width: "80px", height: "50px" }}
        >
          Search
        </Button>
      </form>
    </div>
  );
}

export default App;
