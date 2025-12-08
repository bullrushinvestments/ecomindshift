import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import DesignArchitecture from './DesignArchitecture';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockData = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
  ];

  beforeEach(() => {
    (fetchData as jest.Mock).mockResolvedValue(mockData);
  });

  test('renders loading state when data is fetching', async () => {
    render(
      <Router>
        <DesignArchitecture />
      </Router>
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays products after fetching data successfully', async () => {
    render(
      <Router>
        <DesignArchitecture />
      </Router>
    );

    await waitFor(() => {
      mockData.forEach((product) => {
        expect(screen.getByText(product.name)).toBeInTheDocument();
      });
    });
  });

  test('handles error when fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

    render(
      <Router>
        <DesignArchitecture />
      </Router>
    );

    await waitFor(() => expect(screen.getByText(/error/i)).toBeInTheDocument());
  });

  test('allows user interaction with products', async () => {
    const handleClick = jest.fn();
    (fetchData as jest.Mock).mockResolvedValue(mockData);

    render(
      <Router>
        <DesignArchitecture />
      </Router>
    );

    await waitFor(() => expect(screen.getByText(/product a/i)).toBeInTheDocument());

    fireEvent.click(screen.getByText(/product a/i));
    expect(handleClick).toHaveBeenCalled();
  });

  test('ensures accessibility features are implemented', async () => {
    (fetchData as jest.Mock).mockResolvedValue(mockData);

    render(
      <Router>
        <DesignArchitecture />
      </Router>
    );

    await waitFor(() => expect(screen.getByText(/product a/i)).toBeInTheDocument());

    const productLink = screen.getByRole('link', { name: /product a/i });
    expect(productLink).toHaveAttribute('aria-label');
  });

  test('renders empty state when no products are available', async () => {
    (fetchData as jest.Mock).mockResolvedValue([]);

    render(
      <Router>
        <DesignArchitecture />
      </Router>
    );

    await waitFor(() => expect(screen.getByText(/no products available/i)).toBeInTheDocument());
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import DesignArchitecture from './DesignArchitecture';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockData = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
  ];

  beforeEach(() => {
    (fetchData as jest.Mock).mockResolvedValue(mockData);
  });

  test('renders loading state when data is fetching', async () => {
    render(
      <Router>
        <DesignArchitecture />
      </Router>
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays products after fetching data successfully', async () => {
    render(
      <Router>
        <DesignArchitecture />
      </Router>
    );

    await waitFor(() => {
      mockData.forEach((product) => {
        expect(screen.getByText(product.name)).toBeInTheDocument();
      });
    });
  });

  test('handles error when fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

    render(
      <Router>
        <DesignArchitecture />
      </Router>
    );

    await waitFor(() => expect(screen.getByText(/error/i)).toBeInTheDocument());
  });

  test('allows user interaction with products', async () => {
    const handleClick = jest.fn();
    (fetchData as jest.Mock).mockResolvedValue(mockData);

    render(
      <Router>
        <DesignArchitecture />
      </Router>
    );

    await waitFor(() => expect(screen.getByText(/product a/i)).toBeInTheDocument());

    fireEvent.click(screen.getByText(/product a/i));
    expect(handleClick).toHaveBeenCalled();
  });

  test('ensures accessibility features are implemented', async () => {
    (fetchData as jest.Mock).mockResolvedValue(mockData);

    render(
      <Router>
        <DesignArchitecture />
      </Router>
    );

    await waitFor(() => expect(screen.getByText(/product a/i)).toBeInTheDocument());

    const productLink = screen.getByRole('link', { name: /product a/i });
    expect(productLink).toHaveAttribute('aria-label');
  });

  test('renders empty state when no products are available', async () => {
    (fetchData as jest.Mock).mockResolvedValue([]);

    render(
      <Router>
        <DesignArchitecture />
      </Router>
    );

    await waitFor(() => expect(screen.getByText(/no products available/i)).toBeInTheDocument());
  });
});