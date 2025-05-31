type ErrorDetails = Record<string, string[] | string>;

export class ApiError extends Error {
  status: number;
  errors: ErrorDetails;

  constructor(status: number, message: string, errors: ErrorDetails = {}) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.errors = errors;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
  }

  static BadRequest(message: string, errors: ErrorDetails = {}): ApiError {
    return new ApiError(400, message, errors);
  }

  static Unauthorized(): ApiError {
    return new ApiError(401, 'User is not authorized');
  }

  static NotFound(): ApiError {
    return new ApiError(404, 'Not found');
  }
}
