import Paper from "paper";

const paint = (color="black") => {
  let myPath = new Paper.Path();

  Paper.view.onMouseDown = (event) => {
    myPath.strokeColor = color;
    myPath.strokeWidth = 3;
  };

  Paper.view.onMouseDrag = (event) => {
    myPath.add(event.point);
  };

  Paper.view.draw();
};

export default paint;