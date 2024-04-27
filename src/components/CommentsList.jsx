import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import "./CommentsList.css"

function CommentsList({ postId }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            const { data, error } = await supabase
                .from('Comments')
                .select()
                .eq('postId', postId)
                .order('created_at', { ascending: false });

            if (error) console.error('Error fetching comments', error);
            else setComments(data);
        };

        fetchComments();
    }, [postId]);

    return (
        <div>
            <h3 className='comments-title'>Comments</h3>
            {comments.map(comment => (
                <div className='post-comments' key={comment.id}>
                    <p>{comment.content}</p>
                    {/* <small>by {comment.author}</small> */}
                </div>
            ))}
        </div>
    );
}

export default CommentsList;
