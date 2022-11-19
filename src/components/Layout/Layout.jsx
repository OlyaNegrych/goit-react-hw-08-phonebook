import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { LayoutWrapper } from '../Layout/Layout.styled';

export const Layout = () => {
  return (
    <LayoutWrapper
      style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}
    >
      <AppBar />
      <Suspense
        fallback={
          <MagnifyingGlass
            visible={true}
            height="100"
            width="100"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        }
      >
        <Outlet />
      </Suspense>
    </LayoutWrapper>
  );
};
