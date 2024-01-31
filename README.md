# Hospital Management System

# Description

Organizations such as hospitals have to deal with a lot of patients daily and
hence generating mammoth amounts of data. This project aims to simplify the
management of data related to various tasks in hospitals, such as appointment
booking, doctor schedules, patient diagnoses, and medical histories. The
features proposed are as follows –

## Patients

A separate interface is available for patients with a unique login or one can easily create a new account by signing up.

• Patients can easily schedule appointments and provide their medical history.\
• They can also view and cancel already booked appointments.\
• Cancelled appointments open up slots for other patients and the system prevents overlapping appointments.\
• Patients have access to their complete diagnosis, prescriptions, and medical history.\
• However, only the doctor assigned to their appointment can view their medical history for privacy purposes.

## Doctors

• A separate interface is available for doctors with a unique login.\
• The system takes into account doctor schedules and does not allow
appointments during busy or break times.\
• Doctors can access patients' profiles and medical histories.\
• They can also provide diagnoses and prescriptions, and make
modifications to the diagnoses if necessary.

## Admin

• A separate interface is available for admins with a unique login.\
• Admins can create new schedules which new doctors signing up can choose to follow


Generic Features for all types of users include a single-click button to their respective home page, Privacy features comprising a sign-out feature, and hashing the user’s password for storing in the database providing added security against cyber-attacks.


# ER Schema

![Logo](https://github.com/VinayPolisetti/H.M.S/blob/main/assets/ER.png?raw=true)
➢ Patient : R = (email, password, name, address, gender, phno)
➢ MedicalHistory : R = (id, date, conditions, surgeries, medication)\
➢ Doctor : R = (email, gender, password, name, phno)\
➢ Appointment : R = (id, date, start time, end time, status)
➢ PatientsAttendAppointments : R = (patient, appointment,concerns,
symptoms)\
➢ Schedule : R = (id, start time, end time, break time, day)\
➢ PatientsFillHistory : R = (patient, history)\
➢ Diagnose : R = (appointment, doctor, diagnosis, prescription)\
➢ DoctorsHaveSchedules : R = (schedule, doctor)\
➢ DoctorViewsHistory : R = (history, doctor)\
➢ Admin : R = (email, password, name, phno)

# Sequence Diagram

![Logo](https://raw.githubusercontent.com/VinayPolisetti/H.M.S/0c3334046098ff26f176e176fddefc1ac2e5f5b1/Sequence%20Diagram.svg)

# Tools and Software Used

## Front-End

React.js: React.js is a JavaScript library used for building user interfaces. It is a
component-based framework that allows developers to create reusable UI
components, making the development process faster and more efficient. In this
project, React.js is used for the front end to create an interactive and userfriendly interface for patients, doctors, and admins.\
\
Create React App: Create React App is a command line tool created by
Facebook for generating React.js applications. It provides a convenient and
efficient way to start a new React.js project without having to configure build
tools and other development tools. In this project, Create React App can be
used to quickly generate a new React.js application.

## Back-End

Node.js: Node.js is a JavaScript runtime that runs on the server side. It enables
developers to build fast, scalable, and efficient applications using JavaScript. In
this project, Node.js is used as the backend to handle the server-side processing
of data and provide a seamless experience for users. The backend communicates
with the database to retrieve or store data, and the database is updated whenever
there is a change in the data.\
\
Express: Express is a popular web application framework for Node.js. It
provides a simple and fast way to create web applications and APIs. In this
project, Express is used to handle routing, middleware, and server-side
rendering.

## DataBase

MySQL: MySQL is a widely used relational database management system. It is
known for its reliability, scalability, and performance. In this project, MySQL is
used to store and manage data like appointments, doctor schedules, patient
diagnoses, medical histories, etc.

## Testing 

Brave Browser: Brave Browser is a web browser that is built on the Chromium
engine. It is known for its privacy-focused features and fast browsing
experience. In this project, Brave Browser is used for testing the application to
ensure that it is working correctly and as expected.

# Interface

Please Note that images were cropped to fit 

## Login Page 
![Logo](https://github.com/VinayPolisetti/H.M.S/blob/main/assets/3.png?raw=true)

## Patient Home
![Logo](https://github.com/VinayPolisetti/H.M.S/blob/main/assets/4.png?raw=true)

## Doctor Home 
![Logo](https://github.com/VinayPolisetti/H.M.S/blob/main/assets/5.png?raw=true)

## Admin House 
![Logo](https://github.com/VinayPolisetti/H.M.S/blob/main/assets/6.png?raw=true)

## Viewing Medical History 
![Logo](https://github.com/VinayPolisetti/H.M.S/blob/main/assets/7.png?raw=true)

## Patient Viewing Appointments 
![Logo](https://github.com/VinayPolisetti/H.M.S/blob/main/assets/8.png?raw=true)

## Patient Scheduling Appointments 
![Logo](https://github.com/VinayPolisetti/H.M.S/blob/main/assets/9.png?raw=true)

## Doctor Viewing Appointments 
![Logo](https://github.com/VinayPolisetti/H.M.S/blob/main/assets/10.png?raw=true)

## Doctor Viewing Patients 
![Logo](https://github.com/VinayPolisetti/H.M.S/blob/main/assets/11.png?raw=true)

## Admin Creating Schedule 
![Logo](https://github.com/VinayPolisetti/H.M.S/blob/main/assets/12.png?raw=true)

## Password Reset
![Logo](https://github.com/VinayPolisetti/H.M.S/blob/main/assets/13.png?raw=true)