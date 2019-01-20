import { getters } from "@/store/modules/notifications/getters";
import { notifications } from "@/../fixtures/notifications";

describe("notification getters", () => {
  test("isSuccess returns state.isSuccess", () => {
    const state = notifications;

    // @ts-ignore
    const result = getters.isSuccess(state);
    expect(result).toEqual(true);
  });

  test("isError returns state.isError", () => {
    const state = notifications;

    // @ts-ignore
    const result = getters.isError(state);
    expect(result).toEqual(false);
  });

  test("successMessage returns state.successMessage", () => {
    const state = notifications;

    // @ts-ignore
    const result = getters.successMessage(state);
    expect(result).toEqual(state.successMessage);
  });

  test("errorMessage returns state.errorMessage", () => {
    const state = notifications;

    // @ts-ignore
    const result = getters.errorMessage(state);
    expect(result).toEqual(state.errorMessage);
  });
});
