import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NotificationState {
  message?: string;
  description?: string;
  type?: "success" | "error" | "info" | "warning" | null;
}

const initialState: NotificationState = {
  message: "",
  description: "",
  type: null,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification: (state, action: PayloadAction<NotificationState>) => {
      const { message, description, type } = action.payload;
      state.message = message;
      state.description = description;
      state.type = type;
    },
    clearNotification: (state) => {
      state.message = "";
      state.description = "";
      state.type = null;
    },
  },
});

export const { showNotification, clearNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
