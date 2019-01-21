import { actions } from '@/store/modules/user/actions';
import { user, userBuoughtPremium } from "@/../fixtures/user";

const { updatePremium } = actions;

const setup = (state: any) => {
  const context = {
    state,
    commit: jest.fn(),
    dispatch: jest.fn()
  };

  return { context };
};

describe("user actions", () => {
  test("updatePremium works correctly", () => {
    const state = {
      user
    }
    const { context } = setup(state);

    // @ts-ignore
    updatePremium(context, false);
    expect(context.dispatch).toHaveBeenCalledWith('updateUser', userBuoughtPremium);
  });
});