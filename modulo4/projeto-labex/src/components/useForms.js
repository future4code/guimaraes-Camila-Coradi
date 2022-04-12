import React from 'react';
import { useState } from 'react';

const useForms = (initialState) => {

  const [form, setForm] = useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const cleanFields = () => setForm(initialState);

  return { form, onChange, cleanFields };
};

export default useForms;