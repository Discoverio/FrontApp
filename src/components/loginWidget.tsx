import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { Input, Button } from '@ui-kitten/components';

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: '',
  password: '',
};

const onSubmit = (values: FormValues) => {
  console.log(values);
};

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleChange, handleSubmit, values }) => (
          <>
            <Input
              style={styles.input}
              placeholder='Email'
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <Input
              style={styles.input}
              placeholder='Password'
              value={values.password}
              secureTextEntry
              onChangeText={handleChange('password')}
            />
            <Button style={styles.button} onPress={handleSubmit}>
              Submit
            </Button>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginVertical: 10,
  },
  button: {
    width: '80%',
    marginTop: 20,
  },
});

export default LoginForm;
