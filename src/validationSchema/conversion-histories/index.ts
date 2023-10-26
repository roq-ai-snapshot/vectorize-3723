import * as yup from 'yup';

export const conversionHistoryValidationSchema = yup.object().shape({
  timestamp: yup.date().nullable(),
  conversion_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
