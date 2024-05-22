import { setupWorker } from "msw";
import { handlers as apiCartoons } from "./cartoons.service.mock";

export const worker = setupWorker(...apiCartoons);
