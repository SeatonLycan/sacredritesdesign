import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Please enter a valid email address')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Required')
})

export const initialValues = {
    email: '',
    password: '',
}

export default LoginSchema