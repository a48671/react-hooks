import * as React from 'react';

import { Wrapper, Page } from './styled';

import { range } from '../../utils';

interface InterfaceProps {
    total: number,
    currentPage: number,
    limit: number,
    url: string
}

const Pagination: React.FunctionComponent<InterfaceProps> = (props: InterfaceProps) => {
    const {total, currentPage, limit, url} = props;
    const pagesCount = Math.ceil(total / limit);
    const pages = range(1, pagesCount);
    return (
        <Wrapper>
            {pages.map(page => (
                <Page
                    key={page}
                    current={(page === currentPage) ? 'true' : 'false'}
                    to={`${url}?page=${page}`}
                >
                    {page}
                </Page>
            ))}
        </Wrapper>
    );
};

export default Pagination;