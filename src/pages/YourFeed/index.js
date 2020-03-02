import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import Container from "../../components/Container";
import Feed from '../../components/Feed';
import Pagination from '../../components/Pagination';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import PopularTags from '../../components/PopularTags';
import FeedToggler from "../../components/FeedToggler";

import { getPaginator, queryString } from '../../utils';

import { Wrapper, Banner, Content, Articles, Tags } from '../GlobalFeed/styled';

import useFetch from '../../hooks/useFetch';

const YourFeed = ({location, match}) => {
    const url = match.url;
    const tagName = match.params.tag;
    const {limit, offset, page: currentPage} = getPaginator(location.search);
    const stringifiedParams = queryString.stringify({limit, offset});
    const apiUrl=`/articles/feed/?${stringifiedParams}`;
    const [{response, isLoading, error}, doFetch] = useFetch(apiUrl);
    useEffect(() => {
        doFetch();
    }, [doFetch, currentPage, tagName]);
    return (
        <Wrapper>
            <Banner>
                <Container>
                    <h1>Your feed</h1>
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

YourFeed.propTypes = {
    location: PropTypes.object,
    match: PropTypes.object
}

export default YourFeed;