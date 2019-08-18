import React, { Fragment } from 'react';

import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards';

export const Home = ({ id }) => {
    return (
        <Fragment>
            <ListOfCategories />
            <br />
            <ListOfPhotoCards categoryId={id} />
        </Fragment>
    );
};
