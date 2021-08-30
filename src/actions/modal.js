import * as modelTypes from "../constants/modal";

export const showModal = () => ({
  type: modelTypes.SHOW_MODAL,
});

export const hideModal = () => ({
  type: modelTypes.HIDE_MODAL,
});

export const changeModalTitle = (title) => ({
  type: modelTypes.CHANGE_MODAL_TITLE,
  payload: {
    title,
  },
});

export const changeModalContent = (component) => ({
  type: modelTypes.CHANGE_MODAL_CONTENT,
  payload: {
    component,
  },
});
