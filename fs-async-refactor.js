const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");
    await writeFile(
      "./content/result-async.txt",
      `This is awesome : ${first}, ${second}`
    );
    console.log(first, second);
  } catch (error) {}
};


start();
