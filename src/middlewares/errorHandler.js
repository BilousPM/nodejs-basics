import { HttpError } from 'http-errors';

export const errorHandlerMiddelware = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.message,
      data: err,
    });
  }
  res.status(500).json({
    status: 500,
    message: 'Something iwent wrong',
    error: err.message,
  });
};
