import React, { useContext } from 'react';
import { Context } from '../Context';
import { UserForm } from '../components/UserForm';
import { RegisterMutation } from '../container/RegisterMutation';
import { LoginMutation } from '../container/LoginMutation';
import { Layout } from '../components/Layout';

export default () => {
    const { activateAuth } = useContext(Context);
    return (
        <Layout>
            <RegisterMutation>
                {(register, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                        const input = { email, password };
                        const variables = { input };
                        register({ variables }).then(({ data }) => {
                            const { signup } = data;
                            activateAuth(signup);
                        });
                    };
                    const errorMsg =
                        error && 'El usuario ya existe o hay algun problema';
                    return (
                        <UserForm
                            disabled={loading}
                            error={errorMsg}
                            title='Registrarse'
                            onSubmit={onSubmit}
                        />
                    );
                }}
            </RegisterMutation>
            <br />
            <hr />
            <br />
            <LoginMutation>
                {(login, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                        const input = { email, password };
                        const variables = { input };
                        login({ variables }).then(({ data }) => {
                            const { login } = data;
                            activateAuth(login);
                        });
                    };
                    const errorMsg =
                        error &&
                        'La contraseña no es correcta o el usuario no existe';
                    return (
                        <UserForm
                            disabled={loading}
                            error={errorMsg}
                            title='Iniciar sesión'
                            onSubmit={onSubmit}
                        />
                    );
                }}
            </LoginMutation>
        </Layout>
    );
};
