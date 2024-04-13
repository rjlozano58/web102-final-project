import React from 'react'
import { supabase } from '../client.js'
import { useState, useEffect } from 'react';
import Card from '../components/Card';
import './ReadCrew.css';

function ReadCrew(props) {
    const [crew, setCrew] = useState([]);

    useEffect(() => {
        const fetchCrew = async () => {
            const { data} = await supabase
                .from('Crew')
                .select()
                .order('created_at', { ascending: true });

            console.log(data.color);

            setCrew(data);


        }


        fetchCrew();
    }, [props]);

    return (
        <div className="ReadCrew">
            <div className="crew-container">
            {crew.length > 0 ? (
                crew.map((member, index) => (
                    <Card
                        key={index}
                        name={member.name}
                        id={member.id}
                        speed={member.speed}
                        color={member.color}
                        // Add other member attributes as needed
                    />
                ))
            ) : (
                <h1>No Crew Members Yet 😞</h1>
            )}
            </div>
            
        </div>
    )
}

export default ReadCrew
