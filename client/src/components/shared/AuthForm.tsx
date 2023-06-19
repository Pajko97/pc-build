import React from 'react'
import logo from '../../assets/shared/logo.svg'
import styled from 'styled-components'
import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';

interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  message: string;
}

const InputStyle = {
  padding: '1rem',
  background: '#FFFFFF',
  border: '1px solid #D7D7D7',
  boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
  borderRadius: '10px',
  fontFamily: 'Roboto Flex',
  margin: '1rem',
  width: '100%',
}

const FormStyle = {
  display: 'flex',
  flexDirection: 'column'
}

const ButtonStyle = {
  padding: '1rem 3rem',
  background: '#DB4343',
  color: 'white',
  textTransform: 'uppercase',
}

const GoogleLogin = styled.div`
  border-radius: 10px;
  border: 1px solid black;
  padding: .5rem 1rem;
  margin-right: 2rem;
`

const LILogin = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: .5rem 1rem;
`

const Socials = styled.div`
  display: flex;
`

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;

  return (
    <Form >
      <div style={{boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.25)', margin: '5rem', display: 'flex', minWidth: '20rem', padding: '3rem 2.5rem', flexDirection: 'column', justifyContent: 'center' , alignItems: 'center',borderRadius: '20px'}}>
        <img width={70} height={70} src={logo} />
        <Field style={{ ...InputStyle }} type="email" placeholder="E-mail" name="email" />
        {touched.email && errors.email && <div>{errors.email}</div>}

        <Field style={{ ...InputStyle }} type="password" name="password" />
        {touched.password && errors.password && <div>{errors.password}</div>}
          <p>Forgot Password</p>
        <button style={{
            padding: '1rem 5rem',
            background: '#DB4343',
            color: 'white',
            border: 'none',
            margin: '1rem 0',
            borderRadius: '10px',
            textTransform: 'uppercase',
          }} type="submit" disabled={isSubmitting}>
          SIGN IN
        </button>
         <p style={{ margin: '2.5rem 0'}}>or login with</p>
         <Socials>
          <GoogleLogin>Google</GoogleLogin>
          <LILogin>Linked In</LILogin>
         </Socials>
      </div>
    </Form>
  );
};

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

interface MyFormProps {
  initialEmail?: string;
  message: string; // if this passed all the way through you might do this or make a union type
}


const MyForm = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      email: props.initialEmail || '',
      password: '',
    };
  },

  // Add a custom validation function (this can be async too!)
  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (false == false) {
      errors.email = 'Invalid email address';
    }
    return errors;
  },

  handleSubmit: values => {
    // do submitting things
  },
})(InnerForm);


export const AuthForm: React.FC<{}> = () => {
  return (
    <FormWrapper>
        <MyForm message="Sign up" />
    </FormWrapper>
  )
}

export default AuthForm