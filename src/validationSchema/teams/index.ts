import * as yup from 'yup';

export const teamValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  business_id: yup.string().nullable().required(),
});
