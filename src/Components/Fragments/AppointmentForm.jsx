import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function AppointmentForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // Validation Schema
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, 'Must be at least 2 characters')
      .required('First Name is required'),
    lastName: Yup.string()
      .min(2, 'Must be at least 2 characters')
      .required('Last Name is required'),
    phone: Yup.string()
      .matches(/^01[0-9]{9}$/, 'Phone number must be 11 digits and start with 01')
      .required('Phone number is required'),
    date: Yup.date()
      .min(new Date(), 'Date must be in the future')
      .required('Date is required'),
    time: Yup.string()
      .required('Time is required'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .required('Message is required'),
  });

  return (
    <div className='w-full flex flex-col gap-10 py-5 text-center md:text-left md:block'>
      <h3 className='text-lg uppercase text-blue-600 font-bold ms-5 mb-5'>Free Consultation</h3>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          phone: '',
          date: '',
          time: '',
          message: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
        }}
      >
        {({ setFieldValue }) => (
          <Form className='flex flex-col gap-5 content-center m-auto w-[90%]'>

            {/* First Name */}
            <div>
              <Field className='w-full rounded-full border-2 border-gray-300 p-3' id="firstName" name="firstName" placeholder="First Name" />
              <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Last Name */}
            <div>
              <Field className='w-full rounded-full border-2 border-gray-300 p-3' id="lastName" name="lastName" placeholder="Last Name" />
              <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Select Menu (Services) */}
            <div className="relative">
              <select className="w-full rounded-full border-2 border-gray-300 p-3 text-gray-400 transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:border-blue-400 focus:scale-105">
                <option value="" disabled className="text-gray-400">Select your service</option>
                <option value="Neurology">Neurology</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Dental">Dental</option>
                <option value="Ophthalmology">Ophthalmology</option>
                <option value="Other Services">Other Services</option>
              </select>
            </div>

            {/* Phone Number */}
            <div>
              <Field className='w-full rounded-full border-2 border-gray-300 p-3' id="phone" name="phone" placeholder="Phone Number" type="tel" />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Date Picker */}
            <div className="relative">
              <Field
                className="w-full rounded-full border-2 border-gray-300 p-3 cursor-pointer"
                id="date"
                name="date"
                placeholder="Select Date"
                type="text"
                value={date}
                readOnly
                onClick={() => document.getElementById('datePicker').showPicker()}
              />
              <input
                type="date"
                id="datePicker"
                className="absolute right-0 top-full translate-y-[-110%] bg-white p-3 border-2 rounded-md shadow-lg z-50 hidden"
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => {
                  setDate(e.target.value);
                  setFieldValue("date", e.target.value);
                }}
              />
              <ErrorMessage name="date" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Time Picker */}
            <div className="relative">
              <Field
                className="w-full rounded-full border-2 border-gray-300 p-3 cursor-pointer"
                id="time"
                name="time"
                placeholder="Select Time"
                type="text"
                value={time}
                readOnly
                onClick={() => document.getElementById('timePicker').showPicker()}
              />
              <input
                type="time"
                id="timePicker"
                className="absolute right-0 top-full translate-y-[-110%] bg-white p-3 border-2 rounded-md shadow-lg z-50 hidden"
                onChange={(e) => {
                  setTime(e.target.value);
                  setFieldValue("time", e.target.value);
                }}
              />
              <ErrorMessage name="time" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Message */}
            <div>
              <Field as="textarea" className='w-full rounded-full border-2 border-gray-300 p-3 h-16' id="message" name="message" placeholder="Your message" />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Submit Button */}
            <button className='bg-red-400 text-white text-lg px-5 p-3 rounded-full w-full' type="submit">
              Book Appointment
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
