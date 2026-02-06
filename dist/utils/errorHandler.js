"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
exports.handleError = handleError;
class AppError extends Error {
    constructor(message) {
        super(message);
        this.name = "AppError";
    }
}
exports.AppError = AppError;
function handleError(error) {
    if (error instanceof AppError) {
        console.error(`Application Error: ${error.message}`);
    }
    else if (error instanceof Error) {
        console.error(`Unexpected Error: ${error.message}`);
    }
    else {
        console.error("An unknown error occurred.");
    }
}
//# sourceMappingURL=errorHandler.js.map