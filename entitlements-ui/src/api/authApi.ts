import axios from 'axios';
import { BASE_URL } from '../constants/baseConstants';
import { AuthType } from '../contexts/AuthContext';

type LoginResponseType = {
  success: boolean;
  data?: AuthType;
  message: string;
};

export const loginWithCredentials = async (
  username: string,
  password: string
): Promise<LoginResponseType> => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/login`,
      { email: username, password },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return { success: true, data: response.data, message: '' };
  } catch (err) {
    return { success: false, message: 'Invalid username or password' };
  }
};
