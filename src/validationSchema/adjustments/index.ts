import * as yup from 'yup';

export const adjustmentValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  amount: yup.number().integer().nullable(),
  estimate_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
