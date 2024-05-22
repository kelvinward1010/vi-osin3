import { setupServer } from "msw/node";
import { handlers as apiCartoons } from "./cartoons.service.mock";

export const server = setupServer(...apiCartoons);
