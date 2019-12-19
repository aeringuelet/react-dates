import React, { Fragment, useState } from "react";

const Form = ({ createAppointment }) => {
	const [ appointment, setAppointment ] = useState({
		pet: '',
		owner: '',
		date: '',
		time: '',
		symptoms: ''
	});

	const handleChange = e => {
		setAppointment({
			...appointment,
			[e.target.name] : e.target.value
		})	
	}

	const handleSubmit = e => {
		e.preventDefault();

		createAppointment(appointment);
	}

	return (
		<Fragment>
			<h2>Create appointment</h2>

			<form onSubmit={handleSubmit}>
				<label>Pet Name</label>
				<input
					type="text"
					name="pet"
					className="u-full-width"
					placeholder="Pet name"
					onChange={handleChange}
				/>

				<label>Owner name</label>
				<input
					type="text"
					name="owner"
					className="u-full-width"
					placeholder="Pet owner name"
					onChange={handleChange}
				/>

				<label>Date</label>
				<input 
					type="date" 
					className="u-full-width" 
					name="date"
					onChange={handleChange}
				/>

				<label>Time</label>
				<input 
					type="time" 
					className="u-full-width" 
					name="time" 
					onChange={handleChange}	
				/>

				<label>Symptoms</label>
				<textarea 
					className="u-full-width" 
					name="symptoms"
					onChange={handleChange}					
				></textarea>

				<button type="submit" className="button-primary u-full-width">
					Add
				</button>
			</form>
		</Fragment>
	);
};

export default Form;
