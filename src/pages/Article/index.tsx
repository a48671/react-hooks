import React, { useEffect } from 'react';
import Container from "../../components/Container";
import useFetch from "../../hooks/useFetch";
import {isNull} from "util";
import TagList from "../../components/TagList";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";

import { Wrapper, Avatar, ArticleInfo, Name, Date, Body, Header, AuthorAndDate, Tile } from "./styled";

interface IArticleProps {
    match: {
        params: {
            slug: string
        }
    }
}

const Article:React.FC<IArticleProps> = ({match}): React.ReactElement => {
    const slug: string = match.params.slug;
    const apiUrl = `/articles/${slug}`;
    const [{error, isLoading, response}, doFetch] = useFetch(apiUrl);

    const article: any = response && !isNull(response) && response.article;

    useEffect(() => {
        doFetch();
    }, [doFetch]);

    return (
        <Wrapper>
            {isLoading && <Loading/>}
            {error && <ErrorMessage />}
            {!isLoading && response && (
                <>
                    <Header>
                        <Container>
                            <Tile>{article.title}</Tile>
                            <ArticleInfo>
                                <Avatar to={`/profiles/${article.author.username}`}>
                                    <img src={article.author.image}/>
                                </Avatar>
                                <AuthorAndDate>
                                    <Name to={`/profiles/${article.author.username}`}>
                                        {article.author.username}
                                    </Name>
                                    <Date>{article.createdAt}</Date>
                                </AuthorAndDate>
                            </ArticleInfo>
                        </Container>
                    </Header>
                    <Container>
                        <Body>{article.body}</Body>
                        <TagList tags={article.tagList}/>
                    </Container>
                </>
            )}
        </Wrapper>
    );
};

export default Article;