import { Footer, Navbar } from "@/layout";
import axios from '@/api/axios';
import { useState } from 'react';
import { Consulting } from '@/components';
const ConsaultStoreItem = () => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')


  const hanelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios
        .post(`/contact/`, {
          name: name,
          email: email,
          address: address,
          phone: phone,
          message: message,
          company: company,
        })
        .then((response) => {
          setName('')
          setEmail('')
          setAddress('')
          setPhone('')
          setMessage('')
          setCompany('')
          alert("Your Message has been sent successfully")
        });
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  return (
    <>
      <Navbar />
      <div className=''>
        <Consulting />
      </div>
      <Footer />
    </>
  )
}

export default ConsaultStoreItem