import FormHelperText from '@material-ui/core/FormHelperText'
import AddItemSchema, { initialValues } from '../schema/AddItemSchema'
import { Field, Formik } from 'formik'
import { TextField } from 'formik-material-ui'
import React, { useState } from 'react'
import Button from '@material-ui/core/Button'

const AddItemForm = (props) => {
  const [error, setError] = useState(false)

  return (
    <Formik
      validationSchema={AddItemSchema}
      onSubmit={(values) => {
        setError(false)
        const { title, price, details, specs } = values
        props.submitItem(title, price, details, specs)
        console.log('item submitted')
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
              name="title"
              label="Title"
              type="string"
              component={TextField}
              fullWidth
              margin="normal"
              variant="outlined"
              disabled={props.imageDropped === false}
            />
            <Field
              name="price"
              label="Price"
              type="string"
              component={TextField}
              fullWidth
              margin="normal"
              variant="outlined"
              disabled={props.imageDropped === false}
            />
            <Field
              name="details"
              label="Details"
              type="string"
              component={TextField}
              fullWidth
              margin="normal"
              variant="outlined"
              disabled={props.imageDropped === false}
            />
            <Field
              name="specs"
              label="Specs (Size)"
              type="string"
              component={TextField}
              fullWidth
              margin="normal"
              variant="outlined"
              disabled={props.imageDropped === false}
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
                  Add Item
                </Button>
            </div>
          </form>
        )
      }}
    </Formik>
  )
}

export default AddItemForm
