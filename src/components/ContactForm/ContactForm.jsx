import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const initValues = {
  name: "",
  number: "",
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

export default function ContactForm() {
  const nameId = useId();
  const phoneId = useId();
  const dispatch = useDispatch();

  const submitForm = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        validationSchema={FeedbackSchema}
        initialValues={initValues}
        onSubmit={submitForm}
      >
        <Form className={css.form}>
          <div className={css.inputDiv}>
            <label className={css.label} htmlFor={nameId}>
              Name
            </label>
            <Field
              className={css.input}
              type="text"
              name="name"
              id={nameId}
            ></Field>
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="span"
            />
          </div>
          <div className={css.inputDiv}>
            <label className={css.label} htmlFor={phoneId}>
              Number
            </label>
            <Field
              className={css.input}
              type="text"
              name="number"
              id={phoneId}
            ></Field>
            <ErrorMessage
              className={css.errorMessage}
              name="number"
              component="span"
            />
          </div>
          <button className={css.submitBtn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}
