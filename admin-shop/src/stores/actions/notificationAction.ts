export const SHOW_NOTIFICATION = "SHOW_NOTIFICATION";

export const showNotification = (
  typeNotification: string,
  message: string,
  description: string
) => {
  return {
    type: SHOW_NOTIFICATION,
    payload: { typeNotification, message, description },
  };
};
