import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { supabase } from '../client'

function UpdateCrew() {
    const {id} = useParams();
    const [crew, setCrew] = useState({id: null, name: "", color: "", speed: 0.0});

    const updateCrew = async (event) => {
        event.preventDefault();
        await supabase
            .from('Crew')
            .update({ name: crew.name, color: crew.color,  speed: crew.speed})
            .eq('id', id);

        window.location = "/";
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

    const deleteCrewMember = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .delete()
            .eq('id',id);

        window.location = "/allCrew";
    }

    return (
        <>
            <h2>Update {
                
                }</h2>
            <div className='form-img-container'>
                <img src="https://qph.cf2.quoracdn.net/main-qimg-8d382b5b070a2f877b80c28069e4da26"/>
                <div className='form-container'>
                    <form>
                        <label for="title">Name</label> <br />
                        <input type="text" id="name" name="name" onChange={handleChange} />
                        
                        <br />

                        <label for="author">Color</label>
                        
                        <br />

                        <select name="color" id="color"  multipl onChange={handleChange} >
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
                        <input type="submit" value="Submit"  />
                        <input type='button' onClick={deleteCrewMember} value="Delete"/>
                        
                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateCrew