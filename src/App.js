import React, { useState, Fragment } from 'react';
import Form from './components/Form';

function App() {
  const [ dates, setDates ] = useState([]);

  const createAppointment = appointment => {
    const newDates = [...dates, appointment];
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

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
