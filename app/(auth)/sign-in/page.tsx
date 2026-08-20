"use client";

import AuthForm from '@/components/forms/AuthForm'
import { SignInSchema } from '@/lib/validations'
import React from 'react'

const SignIn = () => {
  return (
    <AuthForm
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      formType="SIGN_IN"
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  )
}

export default SignIn
