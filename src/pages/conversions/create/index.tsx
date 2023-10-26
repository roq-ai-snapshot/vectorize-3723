import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { conversionValidationSchema } from 'validationSchema/conversions';
import { UserInterface } from 'interfaces/user';
import { ConversionInterface } from 'interfaces/conversion';

function ConversionCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: ConversionInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.conversion.create({ data: values as RoqTypes.conversion });
      resetForm();
      router.push('/conversions');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<ConversionInterface>({
    initialValues: {
      pixel_value: 0,
      vector_value: 0,
      conversion_time: new Date(new Date().toDateString()),
      user_id: (router.query.user_id as string) ?? null,
    },
    validationSchema: conversionValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Conversions',
              link: '/conversions',
            },
            {
              label: 'Create Conversion',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Conversion
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Pixel Value"
            formControlProps={{
              id: 'pixel_value',
              isInvalid: !!formik.errors?.pixel_value,
            }}
            name="pixel_value"
            error={formik.errors?.pixel_value}
            value={formik.values?.pixel_value}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('pixel_value', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Vector Value"
            formControlProps={{
              id: 'vector_value',
              isInvalid: !!formik.errors?.vector_value,
            }}
            name="vector_value"
            error={formik.errors?.vector_value}
            value={formik.values?.vector_value}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('vector_value', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <FormControl id="conversion_time" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Conversion Time
            </FormLabel>
            <DatePicker
              selected={formik.values?.conversion_time ? new Date(formik.values?.conversion_time) : null}
              onChange={(value: Date) => formik.setFieldValue('conversion_time', value)}
            />
          </FormControl>
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/conversions')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'conversion',
    operation: AccessOperationEnum.CREATE,
  }),
)(ConversionCreatePage);
