const initialValues = [];
const todoReducer = (state = initialValues, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return action.payload;

    default:
      return state;
  }
};
export default todoReducer;
