import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import './UpdateCrew.css'

function UpdateCrew() {
    const { id } = useParams();
    const [crew, setCrew] = useState({ id: null, name: "", color: "", speed: 0.0 });
    const [crewName, setCrewName] = useState("");
    useEffect(() => {
        const fetchCrew = async () => {
            const { data, error } = await supabase
                .from('Crew')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error fetching crew', error);
            } else {
                setCrew(data);
                setCrewName(data.name);
            }
        };

        fetchCrew();
    }, [id]);

    const updateCrew = async (event) => {
        event.preventDefault();
        await supabase
            .from('Crew')
            .update({ name: crew.name, color: crew.color, speed: crew.speed })
            .eq('id', id);

        window.location = "/allCrew";
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCrew(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const deleteCrewMember = async (event) => {
        event.preventDefault();
        await supabase
            .from('Crew')
            .delete()
            .eq('id', id);

        window.location = "/allCrew";
    };

    return (
        <>
            <h2>Update Crew Member: {crewName}</h2>
            <div className='form-img-container'>
                <img src="https://qph.cf2.quoracdn.net/main-qimg-8d382b5b070a2f877b80c28069e4da26"/>
                <div className='form-container'>
                    <form>
                        <label htmlFor="name">Name</label>
                        <br />
                        <input type="text" id="name" name="name" value={crew.name} onChange={handleChange} />

                        <br />

                        <label htmlFor="color">Color</label>
                        <br />
                        <select name="color" id="color" value={crew.color} onChange={handleChange}>
                            <option value="#ff3224">Red</option>
                            <option value="#1fc7ff">Blue</option>
                            <option value="#ff54a4">Pink</option>
                            <option value="#ff601c">Orange</option>
                        </select>

                        <br />

                        <label htmlFor="speed">Speed</label>
                        <br />
                        <input type="number" name="speed" id="speed" value={crew.speed} onChange={handleChange} />

                        <br />
                        <input type="submit" value="Submit" onClick={updateCrew} />
                        <input className="delete-button" type="button" onClick={deleteCrewMember} value="Delete" />
                    </form>
                </div>
            </div>
        </>
    );
}

export default UpdateCrew;