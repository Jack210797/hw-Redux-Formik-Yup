import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Button } from 'react-bootstrap'

const LoginForm = () => {
  const validationScheme = Yup.object({
    login: Yup.string()
      .required('Login is required')
      .min(5, 'Login must be at least 5 characters')
      .max(25, 'Login must be at most 25 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .max(20, 'Password must be at most 20 characters'),
    email: Yup.string().email('Invalid email').required('Email is required')
  })
  const handleSubmit = (values: { login: ''; password: ''; email: '' }) => {
    console.log(values)
  }

  return (
    <Formik
      initialValues={{ login: '', password: '', email: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationScheme}
    >
      <Form className="container">
        <div className="mb-3">
          <label htmlFor="login" className="form-label">
            Login
          </label>
          <Field id="login" type="text" name="login" className="form-control" placeholder="Please enter login" />
          <ErrorMessage name="login" component="div" className="text-danger" />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <Field
            id="password"
            type="password"
            name="password"
            className="form-control"
            placeholder="Please enter password"
          />
          <ErrorMessage name="password" component="div" className="text-danger" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <Field id="email" type="email" name="email" className="form-control" placeholder="name@example.com" />
          <ErrorMessage name="email" component="div" className="text-danger" />
        </div>

        <Button type="submit" variant="primary" className="w-50">
          Submit
        </Button>
      </Form>
    </Formik>
  )
}

export default LoginForm
