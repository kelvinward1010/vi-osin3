import { getCartoons2D, getCartoons2DDetail } from "../cartoons.service";
import { MOCK_CARTOONS_2D_REQUEST } from "../mocks/cartoons.service.mock";

describe("defined functions", () => {
  test("should defined functions", () => {
    expect(getCartoons2D).toBeDefined();
    expect(getCartoons2DDetail).toBeDefined();
  });

  test("should get list cartoons", async () => {
    const response = await getCartoons2D();
    expect(response.cartoons).toBeDefined();
  });

  test("should get detail cartoons", async () => {
    const response = await getCartoons2DDetail("TEST");
    expect(response.cartoon).toStrictEqual(MOCK_CARTOONS_2D_REQUEST[0]);
  });
});
