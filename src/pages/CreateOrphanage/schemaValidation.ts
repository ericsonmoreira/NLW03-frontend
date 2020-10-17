import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  latitude: yup.number().required('Campo obrigatório'),
  longitude: yup.number().required('Campo obrigatório'),
  about: yup
    .string()
    .required('Campo obrigatório')
    .max(300, 'Máximo de 300 caracteres'),
  instructions: yup
    .string()
    .required('Campo obrigatório')
    .max(300, 'Máximo de 300 caracteres'),
  opening_hours: yup.string().required('Campo obrigatório'),
  open_on_week: yup.boolean().required('Campo obrigatório'),
  images: yup
    .array()
    .required('Campo obrigatório')
    .min(1, 'Pelo menos uma Imagem'),
});

export default schema;
