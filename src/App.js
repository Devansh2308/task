import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RenderBoxes from "./components/renderSquare";

const useStyles = makeStyles((theme) => ({
  root: { float: "left" },
  heading: {
    width: "400px ",
    marginLeft: "auto",
    marginRight: "auto",
  },
  main: {
    display: "inline-block",
    margin: "auto",
    width: "500px !important",
  },
  text: {
    marginTop: "20px",
    marginRight: "15px",
    float: "left",
  },
  body: {
    width: "350px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    width: "135px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
  },
}));

const Longchain = () => {
  const classes = useStyles();
  const [number, setNumber] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const grids = () => {
    if (success) {
      return (
        <div>
          <RenderBoxes number={number} />
        </div>
      );
    }
    return "";
  };

  const onClickHandler = () => {
    if (number == "") {
      setError(true);
    } else {
      setSuccess(true);
    }
  };
  return (
    <div>
      <div className={classes.heading}>
        <h1>Stack Finance Intern Task</h1>
      </div>
      <div className={classes.body}>
        <div className={classes.main}>
          <div className={classes.text}>Enter any Number</div>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Number"
              onChange={(event) => {
                event.preventDefault();
                setNumber(event.target.value);
              }}
            />
          </form>
        </div>
        <div className={classes.button}>
          <Button variant="contained" color="primary" onClick={onClickHandler}>
            Create Grid
          </Button>
        </div>
      </div>
      <div></div>
      {grids()}
    </div>
  );
};

export default Longchain;
