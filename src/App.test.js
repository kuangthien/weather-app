import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { setupServer } from 'msw/node'
import { rest } from 'msw'

import App from './App'
import mockTestData from './mockTestData'

const server = setupServer(
  rest.get('/*', (req, res, ctx) => {
    // I prefer to connect to a test server more than a mock like this
    // but it take time for me to setup
    if (req.url.pathname.includes('locationSearch')) {
      return res(ctx.json(mockTestData.locationSearch))
    } else {
      return res(ctx.json(mockTestData.location))
    }
  })
)
beforeAll(() => server.listen())
afterAll(() => server.close())

test('renders App', () => {
  render(<App />)
  const linkElement = screen.getByText(/Weather App/i)
  expect(linkElement).toBeInTheDocument()
})

test('show result as expected', async () => {
  render(<App />)
  const inputSearch = screen.getByTestId('search-input')
  fireEvent.change(inputSearch, { target: { value: 'london' } })
  await screen.getByDisplayValue('london')

  // click to suggestion button:
  const button = await waitFor(() => screen.findByText('London'))
  fireEvent.click(button)

  // TODO: wrirte more test case of presssin enter / submit form 

  // check rs:
  const results = await waitFor(() => screen.findAllByRole('gridcell'))
  expect(results.length).toBeGreaterThanOrEqual(5)
})
