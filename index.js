const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", (line) => {
  if(typeof line === 'string') process.exit(5)
});

rl.once("close", () => {
  // end of input
});
