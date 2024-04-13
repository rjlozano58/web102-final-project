import React from 'react'
import { useState } from 'react';
import { supabase } from '../client'
import './CreateCrew.css'

function CreateCrew() {

    const [crew, setCrew] = useState({name: "", color: "", speed: ""})

    const createCrew = async (event) => {
        event.preventDefault();

        await supabase
        .from('Crew')
        .insert(
            {name: crew.name, color: crew.color, speed: crew.speed}
        )
        .select();

        window.location = "/allCrew";
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCrew( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }


  return (
    <>
        <h2>Create Your New Crew Member!</h2>
        <div className='form-img-container'>
            <img src="https://qph.cf2.quoracdn.net/main-qimg-8d382b5b070a2f877b80c28069e4da26"/>
            <div className='form-container'>
                <form>
                    <label for="title">Name</label> <br />
                    <input type="text" id="name" name="name" onChange={handleChange} />
                    
                    <br />

                    <label for="author">Color</label>
                    
                    <br />

                    <select name="color" id="color" onChange={handleChange} multiple>
                        <option value="#ff3224">Red</option>
                        <option value="#1fc7ff">Blue</option>
                        <option value="#ff54a4">Pink</option>
                        <option value="#ff601c">Orange</option>
                    </select>

                    <br/>

                    <label for="description">Speed</label>
                    
                    <br />

                    <input type="number" name="speed" id="speed" onChange={handleChange} />

                    <br/>
                    <input type="submit" value="Submit" onClick={createCrew} />
                </form>
            </div>
        </div>
    </>

  )
}

export default CreateCrew