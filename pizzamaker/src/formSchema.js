// Here goes the schema for the form
import * as yup from "yup";

export default yup.object().shape({
  pizzasize: yup
    .string()
    .required("Choice of size is required"),
  sauce: yup
    .string()
    .required("email is required"),
    special: yup
    .string()
    .min(4, "Instructions must have 4 characters"),
});
