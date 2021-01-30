import React from 'react';

interface Props {
  errorMessage: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm: React.FC<Props> = ({ errorMessage, onSubmit }) => (
  <form
    onSubmit={onSubmit}
    className="w-full h-screen flex justify-center items-center flex-col text-lg"
  >
    <div className="mb-4">
      <label className="w-32 inline-block">Username</label>
      <input
        type="text"
        name="username"
        required
        className="w-56 rounded-md px-2 py-1"
      />
    </div>
    <div className="mb-4">
      <label className="w-32 inline-block">Password</label>
      <input
        type="password"
        name="password"
        required
        className="w-56 rounded-md  px-2 py-1"
      />
    </div>
    <div className="my-4 w-96 pl-36">
      <button
        type="submit"
        className="px-6 py-2 bg-indigo-800 flex justify-center text-white text-xl rounded-full w-32"
      >
        Login
      </button>
    </div>

    {errorMessage && <p className="text-red-600 my-4">{errorMessage}</p>}
  </form>
);

export default LoginForm;
