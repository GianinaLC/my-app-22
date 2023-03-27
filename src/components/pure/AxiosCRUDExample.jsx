import { getAllPagedUsers, getAllUsers, getUserByID, login, createUser, updateUserByID, deleteUserByID} from "../../services/axiosCRUDService";
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

const Axioscrudexample = () => {
    const initialCredential = {
        email: '',
        password: ''
    }

const authUser = (values) => {
    login(values.email, values.password)
        .then(response => {
            if (response.data.token) {
                alert(JSON.stringify(response.data))
                sessionStorage.setItem('token', response.data.token)//key, value
            } else {
                sessionStorage.removeItem('token')//key
                throw new Error('Login failure')
            }
        })
        .catch(err => {
            alert(`Algo salio mal ${err}`)
            sessionStorage.removeItem('token')//key
        })
        .finally(()=> console.log('Login done'))
    }
    
    //CRUD examples

    const obtainAllUsers = () => {
        getAllUsers()
            .then(response => {
               if (response.data.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data))
                } else {
                    throw new Error(`No users found`)
                }
            })
        .catch(err => alert('error al obtener usuarios',err))
    }

    const obtainAllPagedUsers= (page) => {
        getAllPagedUsers(page)
            .then(response => {
                if (response.data.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data))
                } else {
                    throw new Error(`No users found in page ${page}`)
                }
            })
            .catch(err => alert('error al obtener usuarios',err))
    }

    const obtainUserByID = (id) => {
        getUserByID(id)
            .then(response => {
                if (response.data.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data))
                } else {
                    throw new Error(`User not found`)
                }
            })
            .catch(err => alert('error al obtener usuarios',err))
    }
        
    const createUsers = (name, job) => {
        createUser(name, job)
            .then(response => {
                if (response.data && response.status === 201) {
                    alert(JSON.stringify(response.data))
                } else {
                    throw new Error(`User not created`)
                }
            })
            .catch(err => alert('error al obtener usuarios',err))
    }

    const updateUser = (id, name, job) => {
        updateUserByID(id, name, job)
            .then(response => {
                if (response.data && response.status === 200) {
                    alert(JSON.stringify(response.data))
                } else {
                    throw new Error(`User not found and no update done`)
                }
            })
            .catch(err => alert('error al obtener usuario id',err))
    }

    const deleteUser = (id) => {
        deleteUserByID(id)
            .then(response => {
                if (response.status === 204) {
                    alert(`User ${id} successfully delete`)
                } else {
                    throw new Error(`User not found and no deleted`)
                }
            })
            .catch(err => alert('User not found and no deleted',err))
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
                    authUser(values)
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
            {/* example button to test API responses */}
            <div>
                <button onClick={obtainAllUsers}>Get all users with Axios</button>
                <button onClick={()=> obtainAllPagedUsers(1)}>Get all users (page1) with Axios</button>
                <button onClick={()=> obtainUserByID(1)}>Get user 1</button>
                <button onClick={()=> createUsers('morpheus','leader' )}>Create user</button>
                <button onClick={()=> updateUser(1,'morpheus','developer' )}>update user</button>
                <button onClick={()=> deleteUser(1)}>delete user</button>
            </div>
        </div>
    )
}

export default Axioscrudexample;