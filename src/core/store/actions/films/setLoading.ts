import * as ActionTypes from 'core/store/actionTypes';

export const setLoading = (loading: boolean) => ({
  type: ActionTypes.Films.SetLoading,
  loading,
});
