import React from 'react';

import { Wrapper, Page } from './styled';

import { range } from '../../utils';

const Pagination = ({total, currentPage, limit, url}) => {
    const pagesCount = Math.ceil(total / limit);
    const pages = range(1, pagesCount);
    return (
        <Wrapper>
            {pages.map(page => (
                <Page
                    key={page}
                    current={page === currentPage ? 'true' : undefined}
                    to={`${url}?page=${page}`}
                >
                    {page}
                </Page>
            ))}
        </Wrapper>
    );
};

export default Pagination;