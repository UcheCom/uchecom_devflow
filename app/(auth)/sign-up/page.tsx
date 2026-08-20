"use client";

import AuthForm from '@/components/forms/AuthForm'
import { SignUpSchema } from '@/lib/validations';
import React from 'react';

const SignUp = () => {
  return (
    <AuthForm
      schema={SignUpSchema}
      defaultValues={{ email: "", password: "", name: "", username: "" }}
      formType="SIGN_UP"
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  )
}

export default SignUp
