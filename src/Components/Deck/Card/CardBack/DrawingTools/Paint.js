import Paper from "paper";

const paint = (color="black", strokeWidth = 3) => {

  let path;

  Paper.view.onMouseDown = (event) => {
    path = new Paper.Path();
    path.strokeColor = color;
    path.strokeWidth = strokeWidth;

  };

  Paper.view.onMouseDrag = (event) => {
    path.add(event.point);
  };

  // Paper.view.draw();

};

export default paint;


