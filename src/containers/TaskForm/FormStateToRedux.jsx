import React from "react";
import { connect } from "react-redux";
import { FormSpy } from "react-final-form";
import { updateFormState } from "../../reducers/form";

const FormStateToRedux = ({ form, updateFormState }) => (
  <FormSpy
    subscription={{ values: true }}
    onChange={(state) => updateFormState(form, state)}
  />
);

export default connect(undefined, { updateFormState })(FormStateToRedux);
