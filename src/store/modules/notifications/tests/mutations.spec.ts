import { mutations } from "@/store/modules/notifications/mutations";
import { notifications } from "@/../fixtures/notifications";

const {
  showSuccessAlert,
  showErrorAlert,
  hideSuccessAlert,
  hideErrorAlert
} = mutations;

describe("notifications mutations", () => {
  test("isSuccess returns state.isSuccess", () => {
    const state = notifications;
    const newMessage = "New message"

    showSuccessAlert(state, newMessage);
    expect(state.successMessage).toEqual(newMessage);
    expect(state.isSuccess).toEqual(true);
  });
});
