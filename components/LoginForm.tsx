import React from 'react';

interface Props {
  errorMessage: string;
  onSubmit: () => {};
}

const LoginForm = ({ errorMessage, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label>
      <span>Type your GitHub username</span>
      <input type="text" name="username" required />
    </label>

    <button type="submit">Login</button>

    {errorMessage && <p className="error">{errorMessage}</p>}
  </form>
);

export default LoginForm;
