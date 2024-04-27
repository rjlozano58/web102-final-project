import React from 'react'
import { supabase } from '../client.js'
import { useState, useEffect } from 'react';
import Card from '../components/Card.jsx';
import { formatDistanceToNow } from 'date-fns';
import './ReadPost.css';

function ReadPost(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchCrew = async () => {
            const { data} = await supabase
                .from('Comics')
                .select()
                .order('created_at', { ascending: true });


            setPosts(data);


        }


        fetchCrew();
    }, [props]);

    return (
        <div className="ReadCrew">
            <div className="posts-container">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post.id}>
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
                    ))
                ) : (
                    <h1>Be The First To Post!😁</h1>
                )}
            </div>
        </div>
    )
}

export default ReadPost
