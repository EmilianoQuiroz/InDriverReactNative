interface ErrorResponse {
    statusCode: number;
    error?: string;
    message: string;
}

const defaultErrorResponse: ErrorResponse = {
    statusCode: 500,
    error: "Error desconocido",
    message: "An unexpected error occurred"
}

export { ErrorResponse, defaultErrorResponse };