import { Response } from "../response";

export class ResponseError extends Error {
    response: Response;

    constructor(response: Response) {
        const errors = response.errors.join(", ");
        super(`Error(s) in dialog: ${errors}.`);
        this.response = response;
    }

    
}