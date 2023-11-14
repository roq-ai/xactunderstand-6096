import * as yup from 'yup';

export const teamMemberValidationSchema = yup.object().shape({
  role: yup.string().nullable(),
  team_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
