import { actions } from '@/store/modules/authentication/actions';

const { logout } = actions;

const setup = () => {
  const context = {
    commit: jest.fn(),
    dispatch: jest.fn()
  };

  return { context };
};

describe("authentication actions", () => {
  test("logout calls correct commits", () => {
    const { context } = setup();

    // @ts-ignore
    logout(context);
    expect(context.commit).toHaveBeenCalledWith('clearUserData');
    expect(context.commit).toHaveBeenCalledWith('clearAuthData');
    expect(context.commit).toHaveBeenCalledWith('logoutUser');
    expect(context.commit).toHaveBeenCalledWith('showSuccessAlert', 'You were logged out successfully.');
    setTimeout(() => {
      expect(context.commit).toHaveBeenCalledWith('hideSuccessAlert');
    }, 2000);
  });
});