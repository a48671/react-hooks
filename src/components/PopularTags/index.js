import React, { useEffect } from 'react';

import Lading from '../Loading';
import ErrorMessag from '../ErrorMessage';

import { Wrapper, Tag } from './styled';

import useFetch from '../../hooks/useFetch';

const PopularTags = () => {

    const [{response, error, isLoading}, doFetch] = useFetch('/tags');

    useEffect(() => {
        doFetch();
    }, [doFetch]);

    if (isLoading || !response) {
        return <Lading/>
    }

    if (error) {
        return <ErrorMessag/>
    }

    return (
        <Wrapper>
            {response.tags.map(tag => (
                <Tag>
                    {tag}
                </Tag>
            ))}
        </Wrapper>
    );
};

export default PopularTags;