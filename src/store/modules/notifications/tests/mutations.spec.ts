import { mutations } from "@/store/modules/notifications/mutations";
import { notifications } from "@/../fixtures/notifications";

const {
  showSuccessAlert,
  showErrorAlert,
  hideSuccessAlert,
  hideErrorAlert
} = mutations;

describe("notifications mutations", () => {
  test("showSuccessAlert works correctly", () => {
    const state = notifications;
    const newMessage = "New message";

    showSuccessAlert(state, newMessage);
    expect(state.successMessage).toEqual(newMessage);
    expect(state.isSuccess).toEqual(true);
  });

  test("showErrorAlert works correctly", () => {
    const state = notifications;
    const newMessage = "New error message";

    showErrorAlert(state, newMessage);
    expect(state.errorMessage).toEqual(newMessage);
    expect(state.isError).toEqual(true);
  });

  test("hideSuccessAlert works correctly", () => {
    const state = notifications;

    hideSuccessAlert(state, null);
    expect(state.isSuccess).toEqual(false);
  });

  test("hideErrorAlert works correctly", () => {
    const state = notifications;

    hideErrorAlert(state, null);
    expect(state.isError).toEqual(false);
  });
});
