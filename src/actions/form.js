import * as types from "../constants/form";

// Action Creators
export const updateFormState = (form, state) => ({
  type: types.UPDATE_FORM_STATE,
  form,
  payload: state,
});

// Selectors
export const getFormState = (state, form) =>
  (state && state.finalForm && state.finalForm[form]) || {};
