import React from 'react';
import { Table, Button, Image } from 'react-bootstrap';
import placeholderImage from '../assets/appointment.jpg'; 


function AppointmentList({ appointments, onConsultedClick, onDeleteClick }) {
  // Placeholder image URL
  const placeholderImageUrl = placeholderImage;

  if (appointments.length === 0) {
    return (
      <div className="text-center">
      <h3>Set up your appointment</h3>
        <Image src={placeholderImageUrl} width= "800px" height="500px"alt="No appointments yet" className="mb-3" />
        
      </div>
    );
  }

  return (
    <>
      <h3 className="text-center mb-4 display-6">Appointment Lists</h3>
      <Table responsive="sm" className="table-hover">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Specialty</th>
            <th>Date</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id} className={appointment.consulted ? 'text-decoration-line-through' : ''}>
              <td>{appointment.patient}</td>
              <td>{appointment.doctor.name}</td>
              <td>{appointment.doctor.dep || 'N/A'}</td>
              <td>{new Date(appointment.date).toLocaleDateString()}</td>
              <td>{new Date(`1970-01-01T${appointment.time}:00`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</td>
              <td>
                <Button variant="outline-primary" onClick={() => onConsultedClick(appointment.id)} className="me-2">
                  {appointment.consulted ? 'Consulted' : 'Mark as Consulted'}
                </Button>
                <Button variant="outline-danger" onClick={() => onDeleteClick(appointment.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default AppointmentList;
