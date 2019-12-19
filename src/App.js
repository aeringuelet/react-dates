import React, { useState, Fragment } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {
  const [ dates, setDates ] = useState([]);

  const createAppointment = appointment => {
    const newDates = [...dates, appointment];
    setDates(newDates);
  }

  const deleteAppointment = index => {
    const newDates = [...dates];
    newDates.splice(index, 1);
    setDates(newDates);
  }

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form 
              createAppointment={createAppointment}
            />
          </div>

          <div className="one-half column">
            { dates.map((appoint, index) => (
              <Appointment 
                appointment={appoint}
                index={index}
                key={index}
                deleteAppointment={deleteAppointment}
              />
            )) }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
