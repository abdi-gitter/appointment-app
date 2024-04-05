import { Container, Row } from 'react-bootstrap';
import DoctorCard from './DoctorCard'; // Adjust the path as needed

const DoctorsContainer = ({ onDoctorSelect, doctorData }) => {
  return (
    <Container>
      <Row className="justify-content-center">
        {doctorData.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} onCardClick={onDoctorSelect} />
        ))}
      </Row>
    </Container>
  );
};

export default DoctorsContainer;
