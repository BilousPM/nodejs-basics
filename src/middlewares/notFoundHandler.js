export const notFoundMiddleware = (req, res, next) => {
  res.status(404).json({
    messsage: 'Sorry, page not found',
  });
  next();
};
