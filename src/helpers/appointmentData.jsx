import img1 from "../assets/dr1.jpg";
import img2 from "../assets/dr2.jpg";
import img3 from "../assets/dr3.jpg";
import img4 from "../assets/dr4.jpg";
import img5 from "../assets/dr5.jpg";
import img6 from "../assets/dr6.jpg";
import img7 from "../assets/dr7.jpg";
import img8 from "../assets/dr8.jpg";

export const appointmentData = [
    {
      id: 1,
      patient: "Barry Vermont",
      day: new Date(),
      consulted: true,
      doctor: "Dr. Hazel Valery",
    },
    {
      id: 2,
      patient: "Harry Coming",
      day: new Date(),
      consulted: false,
      doctor: "Dr. Jessica White",
    },
    {
      id: 3,
      patient: "Aaron Black",
      day: new Date(),
      consulted: false,
      doctor: "Dr. Jasmine Carpanter",
    },
  ];
  
  export const doctorData = [
    {
      id: 1,
      name: "Dr.Hazel Valery",
      dep: "Cardiology",
      img: img1,
    },
    {
      id: 2,
      name: "Dr. Jasmine Carpanter",
      dep: "Radiology",
      img: img2,
    },
    {
      id: 3,
      name: "Dr. Arianna Mary",
      dep: "Orthopedy",
      img: img3,
    },
    {
      id: 4,
      name: "Dr. Jessica White",
      dep: "Gastroenterology",
      img: img4,
    },
    {
      id: 5,
      name: "Harry Coming",
      dep: "Surgery",
      img: img5,
    },
    {
      id: 6,
      name: "Dr. Kristensen Abraham",
      dep: "Neurology",
      img: img6,
    },
    {
      id: 7,
      name: "Dr.Asley Graham",
      dep: "Pediatrics",
      img: img7,
    },
    {
      id: 8,
      name: "Dr. Mary Motley",
      dep: "Oncology",
      img: img8,
    },
  ];