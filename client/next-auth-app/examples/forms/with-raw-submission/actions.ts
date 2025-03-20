'use server';

import { IFormState } from './interface';
import nodemailer from 'nodemailer';

export async function handleSubmit(
  _prevState: IFormState,
  formData: FormData
): Promise<IFormState> {
  // Initialize an error object to collect validation errors
  const errors: IFormState['error'] = {};

  const email = formData.get('email');
  const gmailRegex =
    /^[a-zA-Z0-9]+([\.{1}])?[a-zA-Z0-9]+@(?:gmail|GMAIL)\.(?:com|COM)$/g;
  if (!email || !gmailRegex.test(email.toString())) {
    errors.email = 'Please enter a valid Gmail address';
  }

  const fname = formData.get('fname');
  if (!fname || fname.toString().length < 3) {
    errors.fname = 'First name must be at least 3 characters long';
  }

  const lname = formData.get('lname');

  const phone = formData.get('phone')?.toString();
  const phoneRegex = /^\+?[0-9]\d{1,11}$/;
  if (!phone || !phoneRegex.test(phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  const password = formData.get('password')?.toString();
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!password || !passwordRegex.test(password)) {
    errors.password =
      'Password must be at least 8 characters long, contain at least one digit, one lowercase letter, and one uppercase letter';
  }

  const jobLocation = formData.get('jobLocation');
  if (
    !jobLocation ||
    (jobLocation !== 'remote' && jobLocation !== 'in-office')
  ) {
    errors.jobLocation = 'Please select a preferred job location';
  }

  const languages = formData.getAll('languages');
  if (!languages || languages.length === 0) {
    errors.languages = 'Please select at least one language';
  }

  const jobRole = formData.get('jobRole');
  if (!jobRole || jobRole.toString().trim() === '') {
    errors.jobRole = 'Please select your job role';
  }

  const interest = formData.get('interested');
  if (!interest) {
    errors.interest = 'Please enable your interest';
  }

  const terms = formData.get('terms');
  if (!terms) {
    errors.terms = 'Please enable terms check';
  }

  // If there are any validation errors, return them
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Form values are not valid',
      error: errors,
    };
  }

  // If validation passes, proceed with form processing
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.CONTACT_MAIL_ADDRESS,
        pass: process.env.CONTACT_MAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.CONTACT_MAIL_ADDRESS,
      to: process.env.CONTACT_MAIL_ADDRESS,
      subject: 'Form submission with server action',
      html: `
          <h3 style="margin-bottom:8px">First Name:</h3>
          <p style="margin:0">${fname}</p>
          ${
            lname &&
            `
              <h3 style="margin-bottom:8px">Last Name:</h3>
              <p style="margin:0">${lname}</p>
            `
          }
          <br/>
          <h3 style="margin:0; margin-bottom:8px">Email:</h3>
          <p style="margin:0">${email}</p>
          <br/>
          <h3 style="margin:0; margin-bottom:8px">Phone:</h3>
          <p style="margin-top:0">${phone}</p>
          <br/>
          <h3 style="margin:0; margin-bottom:8px">Job Role:</h3>
          <p style="margin-top:0">${jobRole}</p>
          <br/>
          <h3 style="margin:0; margin-bottom:8px">Job location:</h3>
          <p style="margin-top:0">${jobLocation}</p>
          <br/>
          <h3 style="margin:0; margin-bottom:8px">Languages:</h3>
          <p style="margin-top:0">${languages.join(', ')}</p>
        `,
    };

    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: 'Form successfully submitted',
    };
  } catch (error) {
    console.error(`Error: ${JSON.stringify(error)}`);
    return {
      success: false,
      message: 'Internal server error',
    };
  }
}
