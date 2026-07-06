function asdxCommand(cmd) {
  switch(cmd) {

    case "a":
      console.log("A pressed");
      break;

    case "s":
      console.log("S pressed");
      break;

    case "d":
      console.log("D pressed");
      break;

    case "x":
      console.log("X pressed");
      break;

    default:
      console.log("Unknown command:", cmd);
  }
}
