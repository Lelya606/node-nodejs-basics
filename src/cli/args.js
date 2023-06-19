const argv = process.argv;

const parseArgs = () => {
  const output = [];
  const arguments = argv.filter(
    (element, index, arr) =>
      element.startsWith("--") || (index > 0 && arr[index - 1].startsWith("--"))
  );

  arguments.forEach(
    (element, index, arr) =>
      element.startsWith("--") && output.push(`${element.slice(2)} is ${arr[index + 1]}`)
  );

  console.log(output.join(", "));
};

parseArgs();