const validate = (values) => {
  const errors = {};

  //check valid theo name cua input
  //   const nameErrors = errors["name"];
  //   const descriptionErrors = errors["description"];

  const { title, description } = values;

  if (!title) {
    errors.title = "Required";
  } else if (title.trim().length < 5) {
    errors.title = "Input length must be greater than five characters";
  }

  return errors;
};

export default validate;
