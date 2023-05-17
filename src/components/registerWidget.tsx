import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { Input, Button } from '@ui-kitten/components';
import GoogleLoginWidget from '../components/buttons/sso/google';

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

const RegisterForm = () => {
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
            <Input
              style={styles.input}
              placeholder='Confirm Password'
              value={values.password}
              secureTextEntry
              onChangeText={handleChange('password')}
            />
            <Button style={styles.button} onPress={handleSubmit}>
              Register
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
    marginTop: 24,
    alignItems: 'center',
  },
  input: {
    width: '80%',
    backgroundColor:"none",
    borderColor:"none",
    marginVertical: 16
  },
  button: {
    width: '80%',
    marginTop: 204,
    borderRadius: 12,
    backgroundColor:'#5db0cd',
    borderColor:'#5db0cd'
  },
});

export default RegisterForm;
