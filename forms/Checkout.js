import { Field, Formik } from 'formik'
import { TextField } from 'formik-material-ui'
import CheckoutSchema, { initialValues } from '../schema/CheckoutSchema'
import FormHelperText from '@material-ui/core/FormHelperText';
import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { db } from '../firebase/firebase'

const CheckoutForm = (props) => {
    const [error, setError] = useState(false)
    const contactEmail = 'slycan42@gmail.com'

    return (
        <Formik
          validationSchema={CheckoutSchema}
          onSubmit={async (values) => {
            setError(false);
            const { email } = values;
            const tempItems = []
            var i = 0
            {props.items.map((item, i) => {
              tempItems.push(i + 1 +'. ' + item.name + ', ' + '$' +  item.price + ', ' + item.details + '-----')
            })}
            await db
              .collection('mail')
              .add({
                to: contactEmail,
                replyTo: email,
                message: {
                  subject: 'Purchased Items',
                  text: 'Purchased Items:   ' + tempItems + '\ Contact: ' + email
              }
            })
        }}
		    initialValues={initialValues}
        >
        {({
          errors,
          handleSubmit,
        }) => {
          return (
			<form onSubmit={handleSubmit}>
              <Field
                name="email"
                label="Email"
                type="email"
                component={TextField}
                fullWidth
                margin="normal"
                variant="outlined"
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
                  Checkout
                </Button>
              </div>
            </form>
          )
        }
      }
        </Formik>
    )
}

export default CheckoutForm