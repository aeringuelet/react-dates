import React from 'react';

const Appointment = ({appointment, index, deleteAppointment}) => {
    return (
        <div className="cita">
            <h3 className="mt-0">{appointment.pet}</h3>
            <p className="card-text">
                <span>Owner name:</span> {appointment.owner}
            </p>
            <p className="card-text">
                <span>Date:</span> {appointment.date}
            </p>
            <p className="card-text">
                <span>Time:</span> {appointment.time}
            </p>
            <p className="card-text">
                <span>Symptoms:</span>
            </p>
            <p className="card-text">{appointment.symptoms}</p>
            <button 
                type="button" 
                className="button eliminar u-full-width"
                onClick={() => deleteAppointment(index)}    
            >Delete</button>
        </div>
    );
}
 
export default Appointment;