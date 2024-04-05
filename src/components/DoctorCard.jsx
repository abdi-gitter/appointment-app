import { Card, Col } from 'react-bootstrap';

const DoctorCard = ({ doctor, onCardClick }) => {
  return (
    <Col md={4} sm={6} className="mb-4">
      <Card onClick={() => onCardClick(doctor)}>
        <Card.Img variant="top" src={doctor.img} alt={doctor.name} />
        <Card.Body>
          <Card.Title>{doctor.name}</Card.Title>
          <Card.Text>{doctor.dep}</Card.Text>
          
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DoctorCard;
