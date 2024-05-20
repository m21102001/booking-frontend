/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { createContext, useState, useContext, useEffect } from 'react';
import axios from '@/api/axios';
import { toast } from 'react-toastify';
export const Auth = createContext();
export const AuthProvider = ({ children }) => {
  const [Loggedin, setLoggedin] = useState(false);
  const [role, setRole] = useState('');

  const [user, setuser] = useState();
  const [Fetched, setFetched] = useState(false);
  useEffect(() => {
    const CheckUser = async () => {
      try {
        const { data } = await axios.get('users/me/', {
          withCredentials: true,
        });
        if (typeof data === 'object') {
          setuser(data);
          setRole(data?.role);
          // console.log('from auth', data);
          setLoggedin(true);
        }
      } finally {
        setFetched(true);
      }
    };

    CheckUser();
  }, []);
  const login = async (email, password) => {
    try {
      const {data} = await axios.post(
        'auth/login',
        {
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      // console.log(data);
      toast.success('تم تسجيل الدخول بنجاح');
      setuser(data.data);
      setLoggedin(true); // Set Loggedin to true only if login is successful
    } catch (err) {
      toast.error(err?.response?.data?.message);
    } finally {
      setFetched(true);
    }
  };
  
  return (
    <Auth.Provider
      value={{
        setLoggedin,
        Loggedin,
        setRole,
        role,
        user,
        setuser,
        setFetched,
        login
      }}
    >
      {Fetched ? children : null}
    </Auth.Provider>
  );
};

export const useAuth = () => useContext(Auth);
export const authenticated = () => useAuth().user != null;
