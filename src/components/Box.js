import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper1: {
    height: 140,
    width: 100,
    background: "red",
  },
  paper2: {
    height: 140,
    width: 100,
    background: "blue",
  },
  paper3: {
    height: 140,
    width: 100,
    background: "green",
  },
  paper4: {
    height: 140,
    width: 100,
    background: "pink",
  },

  control: {
    padding: theme.spacing(2),
  },
}));

const Box = ({ color, states }) => {
  const classes = useStyles();

  return (
    <div>
      <Paper
        className={
          color == 1
            ? classes.paper1
            : color == 2
            ? classes.paper2
            : color == 3
            ? classes.paper4
            : classes.paper3
        }
      ></Paper>
    </div>
  );
};

export default Box;
