const notFound = (req, res, next) => {
  const error = new Error("Request Not Found!");
  error.status = 404;
  next(error);
};

const errorHandler = (error, req, res, next) => {
  const statusCode = error.status || 500;
  return res.status(statusCode).json({
    status: "Error",
    code: statusCode,
    message: error.message || "Internal Server Error",
  });
};

module.exports = { notFound, errorHandler };
