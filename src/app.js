const express = require('express');
const routes = require('../routes/index');

const app = express();
app.use(express.json());
app.use('/', routes);

const port = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}

// export for tests
module.exports = app;

