import { getters } from '@/store/modules/user/getters';
import { user } from '@/../fixtures/user';

describe('user getters', () => {
  test('user returns state.user', () => {
    const state = { user }

    // @ts-ignore
    const result = getters.user(state);
    expect(result).toEqual(user);
  });

  test('userFunds returns state.user.funds', () => {
    const state = { user }

    // @ts-ignore
    const result = getters.userFunds(state);
    expect(result).toEqual(user.funds);
  });

  test('isPremium returns state.user.isPremium', () => {
    const state = { user }

    // @ts-ignore
    const result = getters.isPremium(state);
    expect(result).toEqual(user.isPremium);
  });
});