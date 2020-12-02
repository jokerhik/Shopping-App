import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

test('Buttons test', () => {
    render(<Form />);
    const linkElement = screen.getByText('Add');
    expect(linkElement).toBeInTheDocument();
});

// test('after click Add 1 time', () => {
//     render(<Form />);
//
//     fireEvent(
//         screen.getByTestId('addButton'),
//         new MouseEvent('onSubmit', {
//
//             bubbles: true,
//             cancelable: true,
//         })
//     )
//     const linkElement = screen.getByText('Delete');
//     expect(linkElement).toBeInTheDocument();
// });
//

