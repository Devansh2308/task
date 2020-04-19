import React, { useState } from "react";
import Box from "./Box";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  gridList: {
    width: "80%",
    height: 500,
    marginLeft: "auto !important",
    marginRight: "auto !important",
  },
  button: {
    width: "200px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
  },
  button1: {
    width: "80px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
  },
  mainbody: { marginTop: 40, marginBottom: 40 },
}));

const RenderBoxes = ({ number }) => {
  var boxArray = new Array(number * number).fill("");
  const classes = useStyles();
  const [state, setState] = useState(false);
  const [array, setArray] = useState([]);
  const redSquares = new Array();
  const newRedArray = new Array();
  const newGreenArray = new Array();
  const greenSquares = new Array();
  const blueSquares = new Array();
  const newBlueArray = new Array();

  const iterate = () => {
    setState(true);

    let pointer;
    let left = 0;

    //redSquares
    for (let i = 0; i < redSquares.length; i++) {
      left = 0;
      console.log("for workings ");

      for (pointer = i; pointer < redSquares.length - 1; pointer++) {
        console.log("while working " + pointer);
        let myRow = redSquares[pointer].row;
        let nRow = redSquares[pointer + 1].row;
        let myCol = redSquares[pointer].coloumn;
        let nCol = redSquares[pointer + 1].coloumn;

        if (myRow === nRow && myCol + 1 === nCol) {
          console.log("I am executed");
          left++;
        } else {
          break;
        }
      }
      console.log("left: " + left);
      newRedArray.push(left);
    }

    //greenSquares
    for (let i = 0; i < greenSquares.length; i++) {
      left = 0;
      console.log("for workings green ");

      for (pointer = i; pointer < greenSquares.length - 1; pointer++) {
        console.log("while working " + pointer);
        let myRow = greenSquares[pointer].row;
        let nRow = greenSquares[pointer + 1].row;
        let myCol = greenSquares[pointer].coloumn;
        let nCol = greenSquares[pointer + 1].coloumn;

        if (myRow === nRow && myCol + 1 === nCol) {
          console.log("I am executed");
          left++;
        } else {
          break;
        }
      }
      console.log("left: " + left);
      newGreenArray.push(left);
    }

    //blueSquares
    for (let i = 0; i < blueSquares.length; i++) {
      left = 0;
      console.log("for workings blue ");

      for (pointer = i; pointer < blueSquares.length - 1; pointer++) {
        console.log("while working " + pointer);
        let myRow = blueSquares[pointer].row;
        let nRow = blueSquares[pointer + 1].row;
        let myCol = blueSquares[pointer].coloumn;
        let nCol = blueSquares[pointer + 1].coloumn;
        console.log(myRow, nRow, myCol + 1, nCol);
        if (myRow === nRow && myCol + 1 === nCol) {
          console.log("I am executed");
          left++;
        } else {
          break;
        }
      }
      console.log("left: " + left);
      newBlueArray.push(left);
    }

    console.log("newRedArray: " + newRedArray);
    console.log("newGreenArray: " + newGreenArray);
    console.log("newBlueArray: " + newBlueArray);
    let xRed = Math.max.apply(null, newRedArray);
    let xGreen = Math.max.apply(null, newGreenArray);
    let xBlue = Math.max.apply(null, newBlueArray);
    console.log(xRed, xGreen, xBlue);

    let z;
    let y;
    let x;
    if (xRed >= xGreen && xRed >= xBlue) {
      y = newRedArray.findIndex((element) => element === xRed);
      console.log("y red" + y);
      x = xRed;
      z = redSquares[y].row * number + redSquares[y].coloumn;
    } else if (xRed <= xGreen && xGreen >= xBlue) {
      y = newGreenArray.findIndex((element) => element === xGreen);
      console.log("y green" + y);
      x = xGreen;
      z = greenSquares[y].row * number + greenSquares[y].coloumn;
    } else if (xBlue >= xGreen && xBlue >= xRed) {
      y = newBlueArray.findIndex((element) => element === xBlue);
      x = xBlue;
      z = blueSquares[y].row * number + blueSquares[y].coloumn;
    } else {
      z = 1;
      y = 1;
      x = 1;
    }
    console.log("z" + z, "y" + y, "x" + x);
    for (let a = x; a >= 0; a--) {
      boxArray[z] = 3;
      z++;
    }

    setArray(boxArray);
    console.log("aar" + boxArray);

    console.log(z);
  };
  const RandomNumberGenerator = (index) => {
    var i;
    i = Math.floor(Math.random() * 3);
    boxArray[r] = i;

    if (i == 1) {
      const address = {
        row: Math.floor(index / number),
        coloumn: index % number,
      };

      redSquares.push(address);
    }
    if (i == 0) {
      const address = {
        row: Math.floor(index / number),
        coloumn: index % number,
      };

      greenSquares.push(address);
    }
    if (i == 2) {
      const address = {
        row: Math.floor(index / number),
        coloumn: index % number,
      };

      blueSquares.push(address);
    }
    r++;
    return i;
  };
  var r = 0;
  var p = 0;
  const cal = (index) => {
    p++;

    return array[index];
  };

  return (
    <div className={classes.mainbody}>
      <GridList cellHeight={160} className={classes.gridList} cols={number}>
        {boxArray.map((index) => (
          <GridListTile key={index}>
            <Box color={state ? cal(p) : RandomNumberGenerator(r)} />
          </GridListTile>
        ))}
      </GridList>
      <div className={classes.button}>
        <Button variant="contained" color="primary" onClick={iterate}>
          Calculate longest chain
        </Button>
      </div>
      <div className={classes.button1}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            window.location.reload();
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};
export default RenderBoxes;
