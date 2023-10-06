import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuth } from './useAuth';

export default function useFetch(url: string) {
  const { auth } = useAuth();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  const fetchData = async (url: string) => {
    setLoading(true);
    try {
      const result = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth?.token}`,
        },
      });
      setData(result.data);
    } catch (err: unknown) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url, auth?.token]);

  return {
    data,
    loading,
    error,
  };
}
