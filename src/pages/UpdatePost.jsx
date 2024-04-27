import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import './UpdatePost.css'

function UpdatePost() {
    const { id } = useParams();
    const [post, setPost] = useState({ id: null, title: "", body: "", img: "", color: "" });
    const [postName, setPostName] = useState("");
    useEffect(() => {
        const fetchPost = async () => {
            const { data, error } = await supabase
                .from('Comics')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error fetching post', error);
            } else {
                setPost(data);
                setPostName(data.title);
            }
        };

        fetchPost();
    }, [id]);

    const updatePost = async (event) => {
        event.preventDefault();
        await supabase
            .from('Comics')
            .update({ title: post.title, color: post.color, body: post.body, img:post.img })
            .eq('id', id);

        window.location = "/";
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const deletePost = async (event) => {
        event.preventDefault();
        await supabase
            .from('Comics')
            .delete()
            .eq('id', id);

        window.location = "/";
    };

    return (
        <>
            <h2 className='create-post-title'>Update Your Post!</h2>

            <div className='form-container'>
                <form>
                    <label for="title">Title</label> <br />
                    <input type="text" id="title" name="title" onChange={handleChange} value={post.title} />
                    
                    <br />

                    <label for="img">Image URL</label> <br />


                    <img className="post-img" src={post.img}/>

                    <br />

                    <input type="text" name="img" id="img" onChange={handleChange} value={post.img}/>

                    <br />

                    <label for="author">Body</label>
                    
                    <br />

                    <textarea id='body' name='body' onChange={handleChange} placeholder='What do you have to say?' value={post.body}/>

                    <br/>

                    <label for="author">Color</label>
                    
                    <br />

                    <select name="color" id="color" onChange={handleChange} multiple>
                        <option value="#ff3224">Red</option>
                        <option value="#1fc7ff">Blue</option>
                        <option value="#ff54a4">Pink</option>
                        <option value="#ff601c">Orange</option>
                    </select>

                    <br/>
                    <div className='like-edit-button'>
                        <button id="submit" type="submit" value="Submit" onClick={updatePost}>Submit</button>
                        <button id="delete" type="button" onClick={deletePost} value="Delete">Delete</button>
                    </div>
                </form>
            </div>

        </>
    );
}

export default UpdatePost;