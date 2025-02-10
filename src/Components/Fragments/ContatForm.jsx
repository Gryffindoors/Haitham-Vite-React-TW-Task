import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function ContactForm() {
  const validationSchema = Yup.object({
    fullName: Yup.string().min(3, 'Must be at least 3 characters').required('Full Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    subject: Yup.string().min(3, 'Must be at least 3 characters').required('Subject is required'),
    message: Yup.string().min(10, 'Message must be at least 10 characters').required('Message is required'),
  });

  return (
    <div className="w-full mx-auto flex flex-col gap-6 py-10 text-center px-10 bg-gray-200">
      <Formik
        initialValues={{ fullName: '', email: '', subject: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
        }}
      >
        <Form className="m-auto flex flex-col gap-4 w-full">

          {/* Full Name */}
          <div>
            <Field className="w-full rounded-lg border-2 border-gray-300 p-3 bg-white" id="fullName" name="fullName" placeholder="Full Name" autoComplete="name" />
            <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1 " />
          </div>

          {/* Email Address */}
          <div>
            <Field className="w-full rounded-lg border-2 border-gray-300 p-3 bg-white" id="email" name="email" placeholder="Email Address" type="email" autoComplete="email" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1 " />
          </div>

          {/* Subject */}
          <div>
            <Field className="w-full rounded-lg border-2 border-gray-300 p-3 bg-white" id="subject" name="subject" placeholder="Subject" />
            <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1 " />
          </div>

          {/* Message */}
          <div>
            <Field as="textarea" className="w-full rounded-lg border-2 border-gray-300 p-3 h-32 bg-white" id="message" name="message" placeholder="Your Message" autoComplete="off" />
            <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1 " />
          </div>

          {/* Submit Button */}
          <button className="bg-red-400 text-white text-lg px-6 py-3 rounded-full w-1/2 m-auto " type="submit">
            Send Message
          </button>

        </Form>
      </Formik>
    </div>
  );
}
