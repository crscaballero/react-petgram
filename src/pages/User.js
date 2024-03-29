import React, { useContext } from 'react';
import { Context } from '../Context';
import { SubmitButton } from '../components/SubmitButton';
import { Layout } from '../components/Layout';

export default () => {
    const { removeAuth } = useContext(Context);
    return(
        <Layout title={`Perfil`}>
            <SubmitButton onClick={removeAuth} >Cerrar sesión</SubmitButton>
        </Layout>
    )
}
