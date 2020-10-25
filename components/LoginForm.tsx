import React from 'react';

interface Props {
  errorMessage: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm: React.FC<Props> = ({ errorMessage, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label>
      <span>Type your GitHub username</span>
      <input type="text" name="username" required />
      <input type="password" name="password" required />
    </label>

    <button type="submit">Login</button>

    {errorMessage && <p className="error">{errorMessage}</p>}
  </form>
);

export default LoginForm;
