import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Comments from './Comments';
import { supabase } from '../client'; // Ensure you've correctly imported supabase

function Card(props) {
  const [likes, setLikes] = useState(props.likes); // Initialize state for likes
  const [likedPost,setLikedPost] = useState(false);

  const colors = [
    { value: "#ff3224", name: "Red" },
    { value: "#1fc7ff", name: "Blue" },
    { value: "#ff54a4", name: "Pink" },
    { value: "#ff601c", name: "Orange" }
  ];

  const colorName = colors.find(color => color.value === props.color)?.name || 'Unknown';

  const incrementLikes = async () => {

    const newLikes = likes + 1; // Increment likes locally
    setLikes(newLikes); // Update local state

    // Update likes count in Supabase
    const { error } = await supabase
      .from('Comics') // Assuming 'Crew' is the table name
      .update({ likes: newLikes })
      .eq('id', props.id);

    if (error) {
      console.error('Error updating likes', error);
      // Optionally handle rollback or user notification
    }

    setLikedPost(true);
    
    
  };

  return (
    <>
      <div className='card-container' style={{ boxShadow: `0px 0px 30px ${props.color}`, background: `${props.color}` }}>
        
        <div className='content-container'>
          <p className='post-time' >Posted {props.createdTime}</p>
          <h1 className='post-title' >{props.title}</h1>
          <img className='post-img' src={props.img} alt="Post"/>
          <h1 className='post-body'>{props.body}</h1>

          <Comments postId={props.id} color={props.color}/>

        </div>

        <div className='like-edit-button'>
          <button onClick={incrementLikes}>{likes} 👍</button>
          <Link className='update-button' to={'/update/' + props.id}>Update Post Info</Link>
          <Link className='view-button' to={'/post/' + props.id}>View</Link>
        </div>
        
      </div>
    </>
  );
}

export default Card;