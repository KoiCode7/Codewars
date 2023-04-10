function dotCalculator(equation) {
  const array = equation.split(" ");

  if (array[1] === "+") {
    const num = array[0].length + array[2].length;
    let dot = [];
    for (let i = 0; i < num; i++) {
      dot.push(".");
    }
    return dot.join("");
  }

  if (array[1] === "-") {
    const num = array[0].length - array[2].length;
    let dot = [];
    for (let i = 0; i < num; i++) {
      dot.push(".");
    }
    return dot.join("");
  }

  if (array[1] === "*") {
    const num = array[0].length * array[2].length;
    let dot = [];
    for (let i = 0; i < num; i++) {
      dot.push(".");
    }
    return dot.join("");
  }

  if (array[1] === "//") {
    const num = Math.floor(array[0].length / array[2].length);
    let dot = [];
    for (let i = 0; i < num; i++) {
      dot.push(".");
    }
    return dot.join("");
  }
}

console.log(dotCalculator(".. - .."));
