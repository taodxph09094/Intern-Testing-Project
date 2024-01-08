export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";

export const startLoading = () => ({
  type: START_LOADING as typeof START_LOADING,
});

export const stopLoading = () => ({
  type: STOP_LOADING as typeof STOP_LOADING,
});
