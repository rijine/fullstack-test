import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import '@testing-library/jest-dom';

const AllProvidersWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <AuthProvider>{children}</AuthProvider>
    </BrowserRouter>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllProvidersWrapper, ...options });

export { customRender as render };
