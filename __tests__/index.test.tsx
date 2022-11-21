import { render, screen } from '@testing-library/react'
import Posts from '../pages/index'
import '@testing-library/jest-dom'
import Sidebar from '../components/Sidebar'

describe('Posts', () => {
    it('renders a heading', () => {
        render(<Sidebar />)

        const heading = screen.getByRole('link', {
            name: /Posts/i,
        })

        expect(heading).toBeInTheDocument()
    })
})
