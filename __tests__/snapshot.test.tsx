import { render } from '@testing-library/react'
import Sidebar from '../components/Sidebar'

it('renders Sidebar unchanged', () => {
    const { container } = render(<Sidebar />)
    expect(container).toMatchSnapshot()
})
