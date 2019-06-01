const validations = {
  1: (value) => {
    if (value.length < 8) return false;
    return !!value;
  },
  44: (value) => {
    if (value.length < 8) return false;
    return !!value;
  },
};

export default validations;
