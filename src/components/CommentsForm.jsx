import React, { useState } from 'react';
import { supabase } from '../client';
import './CommentsForm.css';

function CommentsForm({ postId }) {
    const [content, setContent] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error } = await supabase
            .from('Comments')
            .insert([{ content, postId}]); // Modify as needed

        if (error) console.error('Error inserting comment:', error);
        else setContent('');
    };

    return (
        <form className="comments-form" onSubmit={handleSubmit}>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write a comment..."
                required
            />
            <button type="submit">Post Comment</button>
        </form>
    );
}

export default CommentsForm;
