import * as Yup from 'yup'

const AddItemSchema = Yup.object().shape({
    price: Yup.string()
        .required('Required'),
    details: Yup.string()
        .required('Required'),
    specs: Yup.string()
        .required('Required')
})

export const initialValues = {
    price: '',
    details: '',
    specs: ''
  };
  
export default AddItemSchema