'use server';

import { ServerActionResponse } from '@/lib/types';
import { ApiResponse, IFormFields, Payload } from './types';
import { formSchema } from './schema';
import { authAPI } from '@/backend/auth/auth-api';

export async function formSubmit(
  data: IFormFields
): Promise<ServerActionResponse<ApiResponse>> {
  // Validate form data
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return {
      success: false,
      data: null,
      message: 'Invalid form data. Please check your inputs.',
    };
  }

  try {
    const payload: Payload = {
      firstName: result.data.fname,
      lastName: result.data.lname,
      username: result.data.userName,
      password: result.data.password,
      email: result.data.email,
      phoneNumber: result.data.phone,
      dateOfBirth: result.data.dob.toISOString(),
    };

    const response = await authAPI<ApiResponse, ApiResponse>('/auth/register', {
      body: JSON.stringify(payload),
      method: 'post',
    });

    if (!response.success) {
      return {
        success: false,
        data: null,
        message: response.body.message,
      };
    }

    return {
      isSuccess: true,
      data: response.body,
      message: response.body.message,
    };
  } catch (error) {
    return {
      success: false,
      data: null,
      message: 'Internal Server Error',
    };
  }
}
