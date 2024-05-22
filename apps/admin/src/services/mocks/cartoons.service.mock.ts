import { BASE_URL } from "@/constants/config";
import { rest } from "msw";
import { createDetailHandler, createFixResponseHandler } from "./mock-helper";

export const MOCK_CARTOONS_2D_REQUEST = [
  {
    title: "The New Adventures of Winnie the Pooh",
    year: 1988,
    creator: ["Karl Geurs", "Terence Harrison", "Ken Kessel"],
    rating: "TV-Y",
    genre: ["Adventure", "Comedy"],
    runtime_in_minutes: 30,
    episodes: 50,
    image:
      "https://m.media-amazon.com/images/M/MV5BZjFkZDkwYjktMmZkNi00ZTVkLWI5ZmItZWI2MmI1NjQ1Y2U0XkEyXkFqcGdeQXVyOTg4MDk3MTQ@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
    id: "TEST",
  },
];

export const handlers = [
  rest.get(`${BASE_URL}/cartoons`, createFixResponseHandler(MOCK_CARTOONS_2D_REQUEST)),
  rest.get(`${BASE_URL}/cartoons/:id`, createDetailHandler(MOCK_CARTOONS_2D_REQUEST, "id")),
];
