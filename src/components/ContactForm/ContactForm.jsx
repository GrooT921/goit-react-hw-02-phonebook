// import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const userSchema = Yup.object({
  name: Yup.string().required(),
  number: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required(),
});

export const ContactForm = ({ addContact }) => {
  const handleSubmit = ({ name, number }, actions) => {
    addContact(name, number);
    console.log(name, number);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <Form>
        <label>
          Name
          <Field
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </label>
        <label>
          Number
          <Field
            type="text"
            name="number"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </label>

        <ErrorMessage name="name" component="div" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
