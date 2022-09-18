require("dotenv").config();
const reload = require("reload");
const { exec } = require("child_process");

const app = require("./src/app");

const port = parseInt(process.env.APP_PORT ?? "5000", 10);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on ${port}`);
  }
});

/* this block is for auto-reload only */
/* ================================== */
exec("npm run tailwind:css", (error, success) => {
  if (error) console.error(error.message);
  if (success) {
    // eslint-disable-next-line no-restricted-syntax
    console.log(success);
    reload(app);
  }
});
/* ================================== */
