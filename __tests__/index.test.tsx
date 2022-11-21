import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Sidebar from '../components/Sidebar'

describe('Sidebar', () => {
    it('renders a link', () => {
        render(<Sidebar />)

        const link = screen.getByRole('link', {
            name: /Posts/i,
        })

        expect(link).toBeInTheDocument()
    })
})
