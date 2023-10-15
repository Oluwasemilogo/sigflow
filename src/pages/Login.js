import React from 'react';
import { LoginForm } from '../components/LoginForm';

export const Login = () => {
  return (
    <div>
      <nav className="p-8">
        <h1 className="text-[#32D583] text-3xl font-bold">SigFlow</h1>
      </nav>
      <div className="container mx-auto flex flex-col ">
        <main className="flex justify-center rounded-lg border border-[#E6E7EC] p-7 w-[35rem] items-center mx-auto">
          <LoginForm />
        </main>
        <div className="flex items-center gap-1 mx-auto my-3 cursor-pointer">
          <p className="text-base font-normal">Don't have an account? </p>
          <p className="text-[#32D583] text-base font-semibold">Sign up </p>
        </div>
      </div>
    </div>
  );
}
