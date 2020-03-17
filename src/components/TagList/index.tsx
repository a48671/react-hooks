import React from 'react';
import { Tag, Tags } from './styled';

interface ITagListProps {
    tags: string[]
}

const TagList: React.FC<ITagListProps> = ({tags}): React.ReactElement => {
    return (
        <Tags>
            {tags.map(tag => (
                <Tag key={tag}>
                    {tag}
                </Tag>
            ))}
        </Tags>
    );
};

export default TagList;