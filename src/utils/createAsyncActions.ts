export function createAsyncActions<TRPayload, TSPayload, TFPayload, ActionType extends string>(
  action: ActionType,
) {
  const requestAction = `${action}_REQUEST` as `${ActionType}_REQUEST`;
  const succesAction = `${action}_SUCCESS` as `${ActionType}_SUCCESS`;
  const failedAction = `${action}_FAILED` as `${ActionType}_FAILED`;

  return {
    request: (payload: TRPayload) => ({
      type: requestAction,
      payload,
    }),
    success: (payload: TSPayload) => ({
      type: succesAction,
      payload,
    }),
    failed: (payload: TFPayload) => ({
      type: failedAction,
      payload,
    }),
    types: {
      request: requestAction,
      success: succesAction,
      failed: failedAction,
    },
  };
}
