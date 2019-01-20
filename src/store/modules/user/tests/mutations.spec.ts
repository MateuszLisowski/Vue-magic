import { mutations } from "@/store/modules/user/mutations";
import { user } from "@/../fixtures/user";

const { saveUserData, clearUserData } = mutations;

describe("user mutations", () => {
  test("saveUserData works correctly", () => {
    const state = {};
    const result = {
      user
    };

    // @ts-ignore
    saveUserData(state, user);
    expect(state).toEqual(result);
  });

  test("clearUserData works correctly", () => {
    const state = {
      user
    };
    const result = {
      user: {}
    };

    // @ts-ignore
    clearUserData(state, null);
    expect(state).toEqual(result);
  });
});
