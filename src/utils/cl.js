const CAN_CONSOLE = true;

const cl = (...args) => {
  let randomColorCode = Math.floor(Math.random() * 16777215).toString(16);
  let randomColor = "#" + randomColorCode;

  if (CAN_CONSOLE) {
    if (
      args[0] === "input values in POST Method" ||
      args[0] === "input values in PUT Method" ||
      args[0] === "input values in GET Method"
    ) {
      console.log("%c", "background-color : #424242", args);
    } else if (args[0] === "result inside 200") {
      console.log("%c", "background-color : #345995", args);
    } else {
      console.log(args);
    }
    console.log("%c ----------------------", `color: ${randomColor}`);
  }
};

export default cl;
