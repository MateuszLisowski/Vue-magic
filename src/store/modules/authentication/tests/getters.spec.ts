import { getters } from '@/store/modules/authentication/getters';
import { loginData, clearedLoginData } from '@/../fixtures/authentication';

describe('product getters', () => {
  test('isAuthenticated should return true when there is a idToken and user is loggged', () => {
    const state = loginData

    // @ts-ignore
    const result = getters.isAuthenticated(state);
    expect(result).toEqual(true);
  });

  test('isAuthenticated should return false when there is no correct idToken and user is not loggged', () => {
    const state = clearedLoginData

    // @ts-ignore
    const result = getters.isAuthenticated(state);
    expect(result).toEqual(false);
  });
});