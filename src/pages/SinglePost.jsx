import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import Card from '../components/Card.jsx'
import { formatDistanceToNow } from 'date-fns';
import './SinglePost.css'

function SinglePost() {
    const { id } = useParams(); // This gets the id from the URL
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            const { data, error } = await supabase
                .from('Comics') // Adjust table name as needed
                .select()
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error fetching post:', error);
            } else {
                setPost(data);
            }
        };

        fetchPost();
    }, [id]);

    if (!post) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className='single-post-container'>
                <Card
                    title={post.title}
                    id={post.id}
                    body={post.body}
                    img={post.img}
                    color={post.color}
                    likes={post.likes}
                    createdTime={formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}
                />
            </div>
            
        </>
    );
}

export default SinglePost;
