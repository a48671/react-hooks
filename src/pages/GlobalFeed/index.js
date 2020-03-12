import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import Container from "../../components/Container";
import Feed from '../../components/Feed/index.tsx';
import Pagination from '../../components/Pagination/index.tsx';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import PopularTags from '../../components/PopularTags';
import FeedToggler from "../../components/FeedToggler";

import { getPaginator, queryString } from '../../utils';

import { Wrapper, Banner, Content, Articles, Tags } from './styled';

import useFetch from '../../hooks/useFetch.tsx';

const GlobalFeed = ({location, match: {url}}) => {
    const {limit, offset, page: currentPage} = getPaginator(location.search);
    const stringifiedParams = queryString.stringify({limit, offset});
    const apiUrl=`/articles?${stringifiedParams}`;
    const [{response, isLoading, error}, doFetch] = useFetch(apiUrl);
    useEffect(() => {
        doFetch();
    }, [doFetch, currentPage]);
    return (
        <Wrapper>
            <Banner>
                <Container>
                    <h1>React-hooks</h1>
                    <p>This my project with use react-hooks</p>
                </Container>
            </Banner>
            <Container>
                <Content>
                    <Articles>
                        <FeedToggler/>
                        {isLoading && <Loading/>}
                        {error && <ErrorMessage/>}
                        {!isLoading && !error && response && (
                            <Fragment>
                                <Feed articles={response.articles}/>
                                <Pagination
                                    currentPage={currentPage}
                                    total={response.articlesCount}
                                    limit={limit}
                                    url={url}
                                />
                            </Fragment>
                        )}
                    </Articles>
                    <Tags>
                        <PopularTags/>
                    </Tags>
                </Content>
            </Container>
        </Wrapper>
    );
};

GlobalFeed.propTypes = {
    location: PropTypes.object,
    match: PropTypes.object
}

export default GlobalFeed;