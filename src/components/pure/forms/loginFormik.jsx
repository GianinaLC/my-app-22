import { Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    }
);




const LoginFormik = () => {
    const initialCredential = {
        email: '',
        password: ''
    }
    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                // *** valores iniciales que recibe el form 
                initialValues={initialCredential}
                // *** Yup validacion esquema 
                validationSchema={loginSchema}
                // *** evento onSubmit 
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    /* guardando datos en el storage */
                    localStorage.setItem('credentials', values)
                }}
            >
                {/* obtener props de formik  desde los campos */}
                {/* {props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit
                    } = props;
                return */}
                {/* // *** simplificado, desestructuracion */}

                {({ values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit }) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                        />
                        {/* email errors */}
                        {
                            errors.email && touched.email && 
                            (/* <div className='error'>
                                <p>{errors.email}</p>
                            </div> */
                                <div>
                                    <ErrorMessage name="email" />
                                </div>
                        )
                        }
                       
                        <label htmlFor="password">Password</label>
                        <Field
                        id="password"
                        name="password"
                        placeholder="password"
                        type="password"
                        />
                        {/* password errors */}
                        {errors.password && touched.password &&
                            /* (<div className='error'>
                                <p>{errors.password}</p>
                        </div> */
                            /// otro ejemplo pasar el div component
                            (
                                <ErrorMessage name="password" component='div' />
                            )
                        }
                        
                        <button type="submit">Submit</button>

                        {isSubmitting ? (<p>Login your credentials... </p>) : null }
                    </Form>
                )}
            </Formik>
        </div>
    )
} 
export default LoginFormik