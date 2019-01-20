import { mutations } from "@/store/modules/authentication/mutations";
import {
  authData,
  clearedLoginData,
  loginData
} from "@/../fixtures/authentication";

const { clearAuthData, logUser, logoutUser } = mutations;

describe("authentication mutations", () => {
  test("clearAuthData works correctly", () => {
    const state = authData;

    // @ts-ignore
    clearAuthData(state, null);
    expect(state.idToken).toEqual(null);
    expect(state.userId).toEqual(null);
  });

  test("logUser works correctly", () => {
    const state = clearedLoginData;

    // @ts-ignore
    logUser(state, null);
    expect(state.isLogged).toEqual(true);
  });

  test("logoutUser works correctly", () => {
    const state = loginData;

    // @ts-ignore
    logoutUser(state, null);
    expect(state.isLogged).toEqual(false);
  });
});
