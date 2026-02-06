export class AppError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AppError";
  }
}

export function handleError(error: unknown): void {
  if (error instanceof AppError) {
    console.error(`Application Error: ${error.message}`);
  } else if (error instanceof Error) {
    console.error(`Unexpected Error: ${error.message}`);
  } else {
    console.error("An unknown error occurred.");
  }
}
