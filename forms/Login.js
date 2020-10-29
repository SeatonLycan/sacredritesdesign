import { auth } from '../firebase/firebase'
import FormHelperText from '@material-ui/core/FormHelperText'
import LoginSchema, { initialValues } from '../schema/LoginSchema'
import { Field, Formik } from 'formik'
import { TextField } from 'formik-material-ui'
import React, { useState } from 'react'
import Button from '@material-ui/core/Button'

const LoginForm = () => {
  const [error, setError] = useState(false)

  return (
    <Formik
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        setError(false)
        const { email, password } = values

        return auth.signInWithEmailAndPassword(email, password)
          .catch(({ message }) => setError(message))
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
            <Field
              name="password"
              label="Password"
              type="password"
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
                  Login
                </Button>
            </div>
          </form>
        )
      }}
    </Formik>
  )
}

export default LoginForm
