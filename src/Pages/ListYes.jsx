import { Link } from 'react-router-dom';

const ListYes = () => {
  console.log('list yes');

  return (
    <>
      <h1 className="heading-xl">List Yes Page</h1>
      <Link to="1" className="link">Item 1</Link>
    </>
  );
};

export default ListYes;
