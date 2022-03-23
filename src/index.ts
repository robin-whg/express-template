import "reflect-metadata";
import express from "express";

const main = () => {
  const app = express();

  const port = process.env.PORT || 4000;

  app.listen(port, () =>
    console.log(`Server running on http://localhost:${port}`)
  );
};

main();
