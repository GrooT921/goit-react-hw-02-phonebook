import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const userSchema = Yup.object({
  name: Yup.string().required(),
});

export const ContactForm = ({ contacts, name }) => {
  const handleSubmit = (values, actions) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={handleSubmit}
      validationSchems={userSchema}
    >
      <Form>
        <label>
          <span>Name</span>
          <Field
            type="text"
            name="name"
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
