import React from 'react';

import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards';
import { Layout } from '../components/Layout';

const HomePage = ({ categoryId }) => {
    return (
        <Layout title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domestivos muy bonitos' >
            <ListOfCategories />
            <br />
            <ListOfPhotoCards categoryId={categoryId} />
        </Layout>
    );
};

export default React.memo(HomePage, (prevProps, props) => {
    return prevProps.categoryId === props.categoryId
});
