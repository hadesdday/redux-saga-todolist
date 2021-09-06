const validate = (values) => {
  const errors = {};

  //check valid theo name cua input
  //   const nameErrors = errors["name"];
  //   const descriptionErrors = errors["description"];

  const { name, description } = values;

  if (!name) {
    errors.name = "Required";
  } else if (name.trim().length < 5) {
    errors.name = "Input length must be greater than five characters";
  }

  return errors;
};

export default validate;
