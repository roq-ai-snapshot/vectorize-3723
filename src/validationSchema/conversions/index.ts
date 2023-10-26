import * as yup from 'yup';

export const conversionValidationSchema = yup.object().shape({
  pixel_value: yup.number().integer().required(),
  vector_value: yup.number().integer().required(),
  conversion_time: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
