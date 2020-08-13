import React from 'react';

const CommentList: React.FC<{ comments: Comment[] }> = ({comments}) => {
    const renderedComments = () => comments.map(({status, id, content}) => {
        let revisedContent;
        switch (status) {
            case "pending":
                revisedContent = 'This comment is awaiting moderation';
                break;
            case 'approved':
                revisedContent = content;
                break;
            case 'rejected':
                revisedContent = 'This comment has been rejected';
                break;
        }


        return <li key={id}>{revisedContent}</li>
    });

    return <ul>{renderedComments()}</ul>;
};

export default CommentList;
