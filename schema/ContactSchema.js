import * as Yup from 'yup'

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email('Please enter a valid email address')
        .required('Required'),
    subject: Yup.string()
        .required('Required'),
    message: Yup.string()
        .required('Required')
})

export const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
export default ContactSchema;