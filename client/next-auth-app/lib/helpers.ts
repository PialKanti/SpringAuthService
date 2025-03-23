
export function parseUnknownError(error: unknown) {
    let errorMessage: string;
  
    // Check if error is an instance of Error
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    // Check if error is a string
    else if (typeof error === 'string') {
      errorMessage = error;
    }
    // Check if error is an object with a message property
    else if (typeof error === 'object' && error !== null && 'message' in error) {
      errorMessage = (error as { message: string }).message;
    }
    // Handle any other types of errors
    else {
      errorMessage = 'Unknown error';
    }
  
    return errorMessage;
  }