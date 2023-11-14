import * as yup from 'yup';

export const estimateValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  status: yup.string().nullable(),
  amount: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
});
