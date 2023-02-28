//models
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegisterFormik = () => {
    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',//to confirm password
        role: ROLES.USER //por defecto
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'username muy corto')
                .max(12, 'username muy largo')
                .required('username es requerido'),
            
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'Debes elegir un rol de usuario')
                .required('Role is required'),
            
            password: Yup.string()
                .min(8, 'password muy corta')
                .required('password is required'),
                //.matches(``)//expresion regular
            //la confirmacion debe ser igual a la Pass
            confirm: Yup.string()
                .when('password', {
                    //si el valor de pass es mayor a 0 
                    is: value => (value && value.length > 0 ? true : false),
                    //entonces verificar que sea uno de la lista
                    then: Yup.string().oneOf(
                        //que coincida con pass
                        [Yup.ref('password')],
                        'Password debe coincidir')
                })
                .required('Confirma password')
        }
    )

    const submit = (values) => {
        alert('register user')
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}
                // *** Yup validacion esquema 
                validationSchema={registerSchema}
                // *** evento onSubmit 
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit }) => (
                    <Form>
                        <label htmlFor="username">Username</label>
                        <Field
                        id="username"
                        name="username"
                        placeholder="username"
                        type='text'
                        />
                        {errors.username && touched.username &&
                            (
                                <ErrorMessage name="username" component='div' />
                            )
                        }

                        <label htmlFor="email">Email</label>
                        <Field
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                        />

                        {errors.email && touched.email &&
                            (
                                <ErrorMessage name="email" component='div' />
                            )
                        }

                        <label htmlFor="password">Password</label>
                        <Field
                        id="password"
                        name="password"
                        placeholder="password"
                        type="password"
                        />

                        {errors.password && touched.password &&
                            (
                                <ErrorMessage name="password" component='div' />
                            )
                        }

                        <label htmlFor="confirm">confirm Password</label>
                        <Field
                        id="confirm"
                        name="confirm"
                        placeholder="confirm password"
                        type="password"
                        />

                        {errors.confirm && touched.confirm &&
                            (
                                <ErrorMessage name="confirm" component='div' />
                            )
                        }

                        <button type="submit">Register Account</button>

                        {isSubmitting ? (<p>Login your credentials... </p>) : null }

                    </Form>
                    )
                }

            </Formik>
        </div>
    )
}

export default RegisterFormik;