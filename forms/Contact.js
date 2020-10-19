import { Field, Formik } from 'formik'
import { TextField } from 'formik-material-ui'
import ContactSchema, { initialValues } from '../schema/ContactSchema'
import FormHelperText from '@material-ui/core/FormHelperText';
import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { db } from '../firebase/firebase'

const ContactForm = (props) => {
    const [error, setError] = useState(false)
    const contactEmail = 'slycan42@gmail.com'

    return (
        <Formik
          validationSchema={ContactSchema}
          onSubmit={async (values, { resetForm }) => {
            setError(false);
            const { name, email, subject, message } = values;
            await db
              .collection('mail')
              .add({
                to: contactEmail,
                replyTo: email,
                message: {
                  subject,
                  text: message
              }
            });
        props.submitContact()
        }}
		    initialValues={initialValues}
        >
        {({
          errors,
          handleSubmit,
          isSubmitting,
        }) => {
          return (
			      <form onSubmit={handleSubmit}>
              <Field
                name="name"
                label="Name"
                type="name"
                component={TextField}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <Field
                name="email"
                label="Email"
                type="email"
                component={TextField}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <Field
                name="subject"
                label="Subject"
                type="string"
                component={TextField}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <Field
                name="message"
                label="Message"
                type="string"
                component={TextField}
                fullWidth
                margin="normal"
                variant="outlined"
                multiline
                rows={3}
              />
              {error && (
                <FormHelperText error>{error}</FormHelperText>
              )}
              <div style={{ paddingTop: 20 }}>
                <Button
                  fullWidth
                  size="large"
                  color="secondary"
                  type="submit"
                  disabled={Boolean(Object.keys(errors).length)}
                  label="Continue"
                  variant="contained"
                >
                  Submit
                </Button>
              </div>
            </form>
          )
        }
      }
        </Formik>
    )
}

export default ContactForm