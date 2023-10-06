import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
// type Props = {};

const RootLayout = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default RootLayout;
