import * as Yup from 'yup'

const CheckoutSchema = Yup.object().shape({
    email: Yup.string()
        .email('Please enter a valid email address')
        .required('Required'),
})

export const initialValues = {
    email: '',
  };
  
export default CheckoutSchema