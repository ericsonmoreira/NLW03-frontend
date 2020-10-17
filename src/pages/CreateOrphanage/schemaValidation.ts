import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  latitude: yup
    .number()
    .required('Campo obrigatório')
    .notOneOf([0], 'Latitude não pode ser ${values}'),
  longitude: yup
    .number()
    .required('Campo obrigatório')
    .notOneOf([0], 'Longitude não pode ser ${values}'),
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
  images: yup.array().min(1, 'Selecione pelo menos uma imagem'),
});

export default schema;
