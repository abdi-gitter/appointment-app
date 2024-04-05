import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

const AddModal = ({ show, onHide, onAddAppointment, selectedDoctor }) => {
    const [patientName, setPatientName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [error, setError] = useState(''); // Added to display error messages.

    const handleSubmit = (e) => {
        e.preventDefault();
        const appointmentDateTime = new Date(`${date}T${time}`);
        const now = new Date();

        // Check if the appointment is in the past.
        if (appointmentDateTime < now) {
            setError('Appointments cannot be set in the past. Enter a valid date');
            return; // Stop further execution.
        }

        // Reset error state on successful validation.
        setError('');

        const appointmentDetails = {
            patient: patientName,
            date,
            time,
            doctor: selectedDoctor // Assuming you're passing selectedDoctor prop correctly.
        };

        onAddAppointment(appointmentDetails); // Trigger adding the appointment.
        onHide(); // Close the modal.
        // Reset form state.
        setPatientName('');
        setDate('');
        setTime('');
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Reserve Your Appointment for {selectedDoctor?.name}</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form.Group className="mb-3">
                        <Form.Label>Patient Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={patientName}
                            onChange={(e) => setPatientName(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Time</Form.Label>
                        <Form.Control
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>Close</Button>
                    <Button variant="primary" type="submit">Add Appointment</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default AddModal;
