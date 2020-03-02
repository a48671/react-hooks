import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Article, ArticleHead, AuthorImage, AuthorName, CreatData, Tags, Tag } from './styled';

const Feed = ({articles=[]}) => {
    return (
        <Wrapper>
            {articles.length
                ?   articles.map((article, index) => (
                        <Article key={index}>
                            <ArticleHead>
                                <AuthorImage to={`/profiles/${article.author.username}`}>
                                    <img src={article.author.image} alt=""/>
                                </AuthorImage>
                                <AuthorName to={`/profiles/${article.author.username}`}>
                                    {article.author.username}
                                </AuthorName>
                                <CreatData>{article.createdAt}</CreatData>
                            </ArticleHead>
                            <div to={`/articles/${article.slag}`}>
                                <h2>{article.title}</h2>
                                <p>{article.description}</p>
                                <span>Read more...</span>
                                {article.tagList && article.tagList.length > 0 && (
                                    <Tags>
                                        {article.tagList.map(tag => (
                                            <Tag key={tag}>
                                                {tag}
                                            </Tag>
                                        ))}
                                    </Tags>
                                )}
                            </div>
                        </Article>
                    ))
                :   <div>Your feed is clear</div>
            }
        </Wrapper>
    );
};

Feed.propTypes = {
    articles: PropTypes.array
}

export default Feed;