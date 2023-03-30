import { Link } from 'react-router-dom';
import { RETRIEVE_URL } from '../Constants/AppUrlConstants';

const Dashboard = () => (
  <>
    <h1>Dashboard</h1>
    <Link to={RETRIEVE_URL}>Retrieve message</Link>
  </>
);

export default Dashboard;
