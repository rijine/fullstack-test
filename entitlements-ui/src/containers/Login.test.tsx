import { rest } from 'msw';
import { beforeAll, afterAll, test, describe, afterEach, expect } from 'vitest';
import { setupServer } from 'msw/node';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { render } from '../test/test-utils';
import { Login } from '.';

const server = setupServer(
  rest.get('http://localhost:8080/auth/login', (req, res, ctx) => {
    return res(ctx.json({ token: 'abcded', name: 'ABC', role: 'ADMIN' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Login', () => {
  test('page displays header', async () => {
    render(<Login />);
    await screen.findByRole('heading');

    expect(screen.getByRole('heading')).toHaveTextContent('Login');
  });

  test('login failed error message', async () => {
    server.use(
      rest.get('http://localhost:8080/auth/login', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<Login />);

    fireEvent.change(screen.getByRole('username'), {
      target: { value: 'abc' },
    });
    fireEvent.change(screen.getByRole('password'), {
      target: { value: 'pass' },
    });
    fireEvent.click(screen.getByRole('signin'));

    await waitFor(() => {
      expect(screen.getByRole('error')).toHaveTextContent(
        'Invalid username or password'
      );
    });
  });
});
