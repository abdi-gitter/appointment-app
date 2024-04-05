import { useState } from 'react';
import Header from '../components/Header';
import DoctorsContainer from '../components/DoctorsContainer';
import AddModal from '../components/AddModal';
import AppointmentList from '../components/AppointmentList';
import { doctorData } from '../helpers/appointmentData'; // Ensure this is the correct path



function Home() {
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [modalShow, setModalShow] = useState(false);
    const [appointments, setAppointments] = useState([]);

    const handleDoctorSelect = (doctor) => {
        setSelectedDoctor(doctor);
        setModalShow(true);
    };

    const handleCloseModal = () => {
        setModalShow(false);
    };

    const handleAddAppointment = (appointmentDetails) => {
        setAppointments(currentAppointments => [
            ...currentAppointments,
            {
                ...appointmentDetails,
                id: Date.now(),
                doctor: selectedDoctor,
                consulted: false,
            }
        ]);
        handleCloseModal();
    };

    const handleConsultedClick = (appointmentId) => {
        setAppointments(currentAppointments =>
            currentAppointments.map(appt => 
                appt.id === appointmentId ? { ...appt, consulted: true } : appt
            )
        );
    };

    const handleDeleteClick = (appointmentId) => {
        setAppointments(currentAppointments =>
            currentAppointments.filter(appt => appt.id !== appointmentId)
        );
    };

    return (
        <>
            <Header />
            <DoctorsContainer onDoctorSelect={handleDoctorSelect} doctorData={doctorData} />
            {selectedDoctor && (
                <AddModal
                    show={modalShow}
                    onHide={handleCloseModal}
                    onAddAppointment={handleAddAppointment}
                    selectedDoctor={selectedDoctor}
                />
            )}
            <AppointmentList
                appointments={appointments}
                onConsultedClick={handleConsultedClick}
                onDeleteClick={handleDeleteClick}
            />
        </>
    );
}

export default Home;




















/* Creating a comprehensive document to describe the functionality of your Doctor 
Appointment App involves outlining the purpose and interaction of components, 
state management, and the flow of data via props. Here's a structured overview:

---

# Doctor Appointment App Documentation

## Overview

The Doctor Appointment App is a React-based application designed to allow users to 
view a list of doctors, select a doctor, book an appointment, and manage these 
appointments. It leverages React Bootstrap for styling and responsiveness, 
ensuring a user-friendly interface across devices.

## Component Structure

The application consists of several key components, each responsible for a 
part of the app's functionality:

### `Home`

The central hub of the application, coordinating the display of doctors, 
the appointment modal, and the list of appointments. It manages the application's state, 
including the list of doctors, selected doctor, visibility of the appointment modal, 
and the appointments themselves.

#### State Management

- **Doctors Data (`doctorData`)**: An array of objects, each representing a 
doctor with properties such as `id`, `name`, `img`, and `dep`.
- **Selected Doctor (`selectedDoctor`)**: Stores the object of the currently 
selected doctor.
- **Modal Visibility (`modalShow`)**: A boolean that controls the visibility 
of the appointment booking modal.
- **Appointments (`appointments`)**: An array of appointment objects, each 
containing details like the patient's name, appointment date, and time.

#### Functions

- **`handleDoctorSelect`**: Triggered when a doctor card is clicked. 
Sets the `selectedDoctor` state.
- **`handleCloseModal`**: Closes the Add Appointment Modal.
- **`handleAddAppointment`**: Adds a new appointment to the `appointments` array.
- **`handleConsultedClick`**: Marks an appointment as consulted.
- **`handleDeleteClick`**: Removes an appointment from the list.

### `DoctorsContainer`

Renders a grid of `DoctorCard` components, each representing a doctor. 
Receives `doctorData` and `onDoctorSelect` as props.

### `DoctorCard`

A presentational component for displaying a doctor's information. 
It is interactive, allowing users to select a doctor by clicking on the card.

### `AddModal`

A modal component for booking a new appointment. It is displayed 
when a doctor is selected and includes a form for appointment details.

### `AppointmentList`

Displays a list of booked appointments. It allows users to mark 
appointments as consulted or delete them.

## Data Flow and Interactions

1. **Viewing Doctors**: The `Home` component passes `doctorData` and 
`onDoctorSelect` to `DoctorsContainer`, which renders individual `DoctorCard` components.
2. **Selecting a Doctor**: Clicking a `DoctorCard` invokes `handleDoctorSelect`, 
updating `selectedDoctor` and showing `AddModal`.
3. **Booking an Appointment**: Within `AddModal`, users submit appointment 
details, calling `handleAddAppointment` to update the `appointments` array.
4. **Managing Appointments**: `AppointmentList` displays all appointments. 
Users can interact with each appointment to mark as consulted or delete, 
triggering `handleConsultedClick` or `handleDeleteClick`.

## Key Features

- **Responsiveness**: Achieved through React Bootstrap, ensuring the app's 
UI adapts to different screen sizes.
- **State Management**: Utilizes React's `useState` for local component 
state and prop drilling to manage data flow.
- **User Interactions**: Through clickable components and forms, the app 
provides a dynamic user experience, allowing for the management of doctor appointments.

## Conclusion

The Doctor Appointment App exemplifies a React application's structure, 
showcasing component-based architecture, state management, and responsive design. 
By breaking down functionality into distinct components, the app achieves a modular 
design, making it maintainable and scalable.

---

This document provides a high-level overview of your app's functionality and 
structure. For detailed implementation specifics, including code 
snippets and prop types, you may want to expand each section with more in-depth 
explanations and examples from your actual codebase. */








/* Certainly! Let's break down the `handleAddAppointment` function piece 
by piece to understand its functionality and role within your application. 
This function is crucial for adding a new appointment to your existing list 
of appointments and involves several steps:

### Function Overview

`handleAddAppointment` is a function defined in the `Home` component that 
adds a new appointment to the list of appointments (`appointments` state). 
It takes one parameter, `appointmentDetails`, which contains the details 
of the new appointment to be added (e.g., patient name, appointment date, and time).

### Breaking Down the Function

1. **Parameter - `appointmentDetails`:**
   - This is an object containing the details of the new appointment. 
   It is expected to have properties like patient's name, date, and time, 
   depending on what data you collect in the `AddModal` form.

2. **Updating State - `setAppointments`:**
   - `setAppointments` is a state updater function provided by the `useState` 
   hook for updating the `appointments` state.
   - It's used here in a functional update form, where `currentAppointments` 
   represents the current state of appointments before the update.

3. **Creating a New Appointment Array:**
   - `[...currentAppointments, {...}]` creates a new array by spreading the 
   existing appointments (`...currentAppointments`) and adding a new object to this array.
   - The new object represents the new appointment to be added.

4. **New Appointment Object:**
   - `{...appointmentDetails, id: Date.now(), doctor: selectedDoctor, 
    consulted: false}` creates a new appointment object.
   - `...appointmentDetails` spreads the properties from the `appointmentDetails` 
   parameter into the new object. This means all the details captured in the `AddModal` 
   form (like patient's name, date, and time) are included in the new appointment object.
   - `id: Date.now()` assigns a unique identifier to the new appointment using the current 
   timestamp. This is useful for uniquely identifying each appointment, 
   especially if you want to modify or delete specific appointments later.
   - `doctor: selectedDoctor` adds the selected doctor's information to the new appointment. 
   This assumes that `selectedDoctor` is part of the component's state that tracks which 
   doctor is currently selected.
   - `consulted: false` sets the initial status of the new appointment to not consulted. 
   This property could be used to track whether the appointment has been fulfilled.

5. **Closing the Modal - `handleCloseModal()`:**
   - After adding the new appointment to the state, this function is called to close 
   the `AddModal`, effectively resetting the form for the next use.

### Summary

In essence, `handleAddAppointment` is responsible for taking the details of a new 
appointment from `appointmentDetails`, creating a new appointment object with those 
details along with some additional properties (`id`, `doctor`, and `consulted` status), 
and adding this object to the existing list of appointments. It then closes the modal 
to reset the UI for potential further additions. This pattern is a common practice in 
React for handling form submissions and updating lists in the state. 



The `handleConsultedClick` function is an example of how state updates can be managed 
in React when you need to update a specific item in an array based on an action, such 
as a click event. This function specifically targets changing the status of an appointment to 
indicate that it has been consulted. Here’s a detailed breakdown of how it works:

### Purpose of the Function

This function is designed to update the `consulted` status of an appointment identified by 
`appointmentId` within the list of appointments managed in the component's state (`appointments`). 
It is likely triggered by an event such as clicking a button associated with an appointment.

### Parameters

- **`appointmentId`**: This is the identifier for the appointment that needs to be updated. 
It's passed to the function when it's invoked, typically from a click event handler attached 
to a UI element.

### Process

1. **State Update with `setAppointments`**:
   - `setAppointments` is called to update the state. This function is provided by the 
   `useState` hook that initializes the `appointments` state in the component. 

2. **Functional Update Form**:
   - The function uses a functional update form where `currentAppointments` 
   represents the current state of the `appointments` array. Using this form 
   is recommended when the new state is derived from the previous state.

3. **Mapping Over `currentAppointments`**:
   - The `map` method is used to create a new array by going through each appointment (`appt`) 
   in `currentAppointments`. The `map` method is perfect for this scenario because it
    allows you to transform each item in an array and return a new array, ensuring immutability of the state.

4. **Conditional Operation**:
   - For each appointment (`appt`), the function checks if `appt.id` matches 
   the `appointmentId` passed to the function.
     - If there's a match (`appt.id === appointmentId`), it means this is the 
     appointment that the user marked as consulted. A new object for this appointment 
     is returned with all its existing properties spread (`...appt`) and the `consulted` 
     property set to `true`. This effectively updates this specific appointment's status 
     without altering the rest of its data.
     - If there's no match, the current appointment (`appt`) is returned as is, with no changes.

### Outcome

The result of this operation is a new array where the specific appointment identified by 
`appointmentId` has its `consulted` status updated to `true`, and this new array replaces 
the previous `appointments` array in the component's state. This pattern ensures the 
immutability of the state is maintained (a key concept in React), as a new array is 
created instead of modifying the existing one directly.

### Summary

`handleConsultedClick` smartly and efficiently updates the state of an individual 
appointment within an array, reflecting a change in its status (from not consulted to consulted) 
in response to a user action, all while adhering to React's principles of state 
immutability and functional updates.
The `handleDeleteClick` function is designed to remove a specific appointment 
from the list of appointments based on its unique identifier (`appointmentId`). 
This function is a common pattern in React for handling the deletion of items 
from a state array. Let’s break it down:

### Function Purpose

The primary purpose of this function is to update the state by removing an appointment from 
the `appointments` array. It’s triggered when a user wants to delete an appointment, 
likely through a UI action like clicking a "Delete" button associated with an appointment.

### Parameters

- **`appointmentId`**: The unique identifier of the appointment to be removed. 
This ID is used to determine which appointment should be deleted from the list.

### Process

1. **State Update with `setAppointments`**:
   - `setAppointments` is called to update the `appointments` state. This updater 
   function comes from the `useState` hook used to manage the `appointments` array in the component's state.

2. **Functional Update with `filter` Method**:
   - A functional update is used, where `currentAppointments` represents the 
   current state of the `appointments` array before any update. This approach 
   is beneficial when the new state depends on the previous state.
   - The `filter` method is applied to `currentAppointments`. This method 
   creates a new array with all elements that pass the test implemented by the provided function. 
   Here, it's used to exclude the appointment that matches the `appointmentId`.

3. **Conditional Check in `filter`**:
   - For each appointment (`appt`) in the array, the `filter` 
   method checks whether `appt.id !== appointmentId`.
     - If this condition is `true` (meaning the appointment's ID does not match the
      `appointmentId` provided), the appointment is included in the new array returned by `filter`.
     - If the condition is `false` (the appointment's ID matches the `appointmentId`), 
     the appointment is excluded from the new array.

### Outcome

By filtering out the appointment with the matching `appointmentId`, the function updates the 
`appointments` state to a new array that no longer includes the deleted appointment. This is an 
effective way to handle the deletion of items from an array in the state because it adheres to 
the principle of immutability in React. Instead of directly modifying the existing state, 
a new array is created and set as the new state.

### Summary

`handleDeleteClick` leverages React's state management patterns to efficiently remove an 
item from an array based on a condition. This approach of using the `filter` method ensures 
that the state remains immutable—a core principle in React development—by generating a new 
array without the item that needs to be deleted and updating the state with this new array.
This snippet of code from a React component showcases how different child components are 
rendered and how they interact within a parent component, often found in a file like `Home.jsx`. 
It demonstrates the use of props to pass data and functions down to child components for dynamic 
rendering and functionality. Let's break down each part for clarity:

### `<DoctorsContainer ... />`

- **Purpose**: This component is responsible for displaying a list of doctors. It's where 
each doctor's information is rendered, likely as individual cards or list items.
  
- **Props**:
  - `onDoctorSelect`: A function passed to `DoctorsContainer` that likely handles what 
  happens when a doctor is selected (e.g., showing more details about the doctor or preparing 
    to book an appointment with them). This prop makes it possible for `DoctorsContainer` 
    to notify the parent component when a doctor has been selected by a user action.
  - `doctorData`: This prop contains the data for all doctors that `DoctorsContainer` will render. 
  This could be an array of objects, where each object holds information about a doctor.

### `{selectedDoctor && <AddModal ... />}`

- **Purpose**: This is a conditional rendering statement that says, "If there is a `selectedDoctor`, 
then render the `AddModal` component." The `AddModal` is likely used for adding a new 
appointment with the selected doctor.

- **Props**:
  - `show`: A boolean that controls the visibility of the modal. It's tied to the `modalShow` 
  state in the parent component, allowing the modal to be shown or hidden based on user actions.
  - `onHide`: A function intended to handle the closing of the modal. It likely updates the 
  state in the parent component to no longer show the modal.
  - `onAddAppointment`: This function is called when a new appointment is successfully added 
  through the modal's form. It updates the appointments list in the parent component's state 
  with the new appointment details.
  - `selectedDoctor`: The doctor data for the doctor who has been selected for the appointment. 
  
  This ensures that the modal knows which doctor is being booked.

### `<AppointmentList ... />`

- **Purpose**: Renders a list of appointments. Each appointment's details are displayed, 
and likely, some options to interact with each appointment (like marking it as consulted or deleting it).

- **Props**:
  - `appointments`: The array of appointment objects to be displayed. Each object in the
  array holds the details of an appointment.
  - `onConsultedClick`: A function that handles the action of marking an appointment as 
  consulted. When invoked, it updates the state of the corresponding appointment to 
  reflect that it has been seen or completed.
  - `onDeleteClick`: This function deals with removing an appointment from the list. 
  It's called when an appointment's delete action is triggered, removing the appointment 
  from the parent component's state.

### Summary

This structure demonstrates how React components can be composed together to build 
complex UIs with interactive features. Through the use of props, the parent component 
(`Home`, in this case) manages the application's state and logic, passing down data 
and handlers to child components (`DoctorsContainer`, `AddModal`, and `AppointmentList`) 
to render the UI based on the current state and handle user interactions efficiently. 
This approach encapsulates functionality within each component while maintaining a 
single source of truth for the state at a higher level, facilitating easier state 
management and component reusability.*/