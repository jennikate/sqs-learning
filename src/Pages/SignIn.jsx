import { useNavigate } from 'react-router-dom';
import { DASHBOARD_URL } from '../Constants/AppUrlConstants';

const SignIn = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(DASHBOARD_URL);
  };
  return (
    <>
      <h1>Sign in</h1>
      <button
        className="button"
        type="button"
        onClick={onClick}
      >
        Click here to sign in
      </button>
    </>
  );
};

export default SignIn;
