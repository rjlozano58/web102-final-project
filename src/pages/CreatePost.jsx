import React from 'react'
import { useState } from 'react';
import { supabase } from '../client'
import './CreatePost.css'

function CreatePost() {

    const [post, setPost] = useState({title: "", img: "", body: "", color:""})

    const createPost = async (event) => {
        event.preventDefault();

        await supabase
        .from('Comics')
        .insert(
            {title: post.title, img: post.img, body: post.body, color:post.color}
        )
        .select();

        window.location = "/";
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }


  return (
    <>
        <h2 className='create-post-title'>Create A New Post!</h2>

        <div className='form-container'>
            <form>
                <label for="title">Title</label> <br />
                <input type="text" id="title" name="title" onChange={handleChange} />
                
                <br />

                <label for="description">Image URL</label>
                <img className="post-img" src={post.img}/>
                <br />

                <input type="text" name="img" id="img" onChange={handleChange} />

                <br/>

                <label for="author">Body</label>
                
                <br />

                <textarea id='body' name='body' onChange={handleChange} placeholder='What do you have to say?'></textarea>

                <br/>

                <label for="author">Primary Color</label>
                
                <br />

                <select name="color" id="color" onChange={handleChange} multiple>
                    <option value="#ff3224">Red</option>
                    <option value="#1fc7ff">Blue</option>
                    <option value="#ff54a4">Pink</option>
                    <option value="#ff601c">Orange</option>
                </select>
                    
                <br/>

                <div className='like-edit-button'>
                    <button id="submit" type="submit" value="Submit" onClick={createPost}>Submit</button>
                </div>
            </form>

            
        </div>

        
    </>

  )
}

export default CreatePost