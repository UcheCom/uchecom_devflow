"use client";

import AuthForm from '@/components/forms/AuthForm'
import { signUpWithCredentials } from '@/lib/actions/auth.action';
import { SignUpSchema } from '@/lib/validations';
import React from 'react';

const SignUp = () => {
  return (
    <AuthForm
      schema={SignUpSchema}
      defaultValues={{ email: "", password: "", name: "", username: "" }}
      formType="SIGN_UP"
      onSubmit={signUpWithCredentials}
    />
  )
}

export default SignUp
