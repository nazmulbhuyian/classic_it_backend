
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./server");
const httpStatus = require("http-status");
const globalErrorHandler = require("./src/middleware/globalErrorHandler");
const routes = require('./src/routes/routes');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Classic It App is working! YaY!");
});

// Import All Api
app.use('/api/v1', routes);


//global error handler
app.use(globalErrorHandler);

//handle not found
app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});


connectDB();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Classic It app is running on port ${port}`);
});



// index.js -> routes -> controllers -> services -> models.