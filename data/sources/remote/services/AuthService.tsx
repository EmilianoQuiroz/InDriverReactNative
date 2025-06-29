import { AuthResponse } from "../../../../domain/models/AuthResponse";
import { defaultErrorResponse, ErrorResponse } from "../../../../domain/models/ErrorResponse";
import { ApiRequestHandler } from "../api/ApiRequestHandler";

export class AuthService {
  async login (
    email: string,
    password: string
  ): Promise<AuthResponse | ErrorResponse> {
    try {
      const response = await ApiRequestHandler.post<AuthResponse>(
        "/auth/login",
        {
          email: email,
          password: password,
        }
      );
      console.log("Respuesta del servidor", response.data);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        const errorData: ErrorResponse = error.response.data;
        if (Array.isArray(errorData.message)) {
          console.error(
            "Errores multiples del servidor",
            errorData.message.join(", ")
          );
        } else {
          console.error("Error en el servidor", errorData.message);
        }
        return errorData;
      } else {
        console.error("Error en la peticion", error.message);
        return defaultErrorResponse;
      }
    }
  };
}
