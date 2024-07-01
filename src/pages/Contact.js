import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
});

const Contact = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input type="text" name="name" ref={register} />
        {errors.name && <span>{errors.name.message}</span>}
      </label>
      <label>
        Email:
        <input type="email" name="email" ref={register} />
        {errors.email && <span>{errors.email.message}</span>}
      </label>
      <label>
        Message:
        <textarea name="message" ref={register}></textarea>
        {errors.message && <span>{errors.message.message}</span>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;
