import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import "./CommentsList.css"
import "./CommentsForm.css"

function Comments({ postId , color}) {
    const [comments, setComments] = useState([]);
    const [content, setContent] = useState("");

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        const { data, error } = await supabase
            .from('Comments')
            .select('content')
            .eq('postId', postId)
            .order('created_at', { ascending: false });

        if (error) console.error('Error fetching comments', error);
        else setComments(data);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { data, error } = await supabase
            .from('Comments')
            .insert([{ content, postId }]);

        if (error) {
            console.error('Error inserting comment:', error);
        } else {
            setContent('');
            setComments([ ...comments, { content } ]); // Add the new comment to the local state to update UI immediately
        }
    };

    return (
        <div className='comments-container'>
            <h1>Comments</h1>
            {comments.map((comment, index) => (
                <div className='post-comments' key={index}>
                    <p>{comment.content}</p>
                </div>
            ))}

            <form className="comments-form" onSubmit={handleSubmit}>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write a comment..."
                    required
                />
                <button type="submit" style={{ background: `${color}` }}>Post Comment</button>
            </form>
            
        </div>
    );
}

export default Comments;
