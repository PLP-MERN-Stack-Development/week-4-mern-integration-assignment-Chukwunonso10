const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url} ${req.originalUrl}`);
    next();
  };

module.exports = logger;