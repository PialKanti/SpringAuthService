'use server';

import { ServerActionResponse } from '@/lib/types';
import nodemailer from 'nodemailer';
import { IFormFields } from './interface';

export async function formSubmit(
  data: IFormFields
): Promise<ServerActionResponse<boolean>> {
  const { fname, lname, email, phone, jobLocation, jobRole, languages } = data;

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
      subject: 'Form submission with server action, yup, formik',
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
          <p style="margin-top:0">${languages?.join(', ')}</p>
        `,
    };

    await transporter.sendMail(mailOptions);

    return {
      isSuccess: true,
      data: true,
      message: 'Thanks for getting in touch',
    };
  } catch (error) {
    console.error(`Form Error: ${JSON.stringify(error)}`);

    return {
      success: false,
      data: null,
      message: 'Internal Server Error',
    };
  }
}
