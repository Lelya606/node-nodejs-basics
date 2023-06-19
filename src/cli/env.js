const env = process.env;

const parseEnv = () => {
  const variables = Object.entries(env).filter(([key, _]) =>
    key.startsWith("RSS_")
  );

  const variableList = variables
    .map(([name, value]) => `${name}=${value}`)
    .join("; ");

  console.log(variableList);
};

parseEnv();