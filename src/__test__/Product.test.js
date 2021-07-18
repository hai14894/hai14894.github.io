import React from 'react';
import Product from "../product/Product"
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import AppProvider from "../provider/AppProvider/App.provider";

// describe('Product test suit', () => {
//   it('Should render Product with image', () => {
//     render(
//       <BrowserRouter>
//         <AppProvider>
//           <Product />
//         </AppProvider>
//       </BrowserRouter>
//     )
//     expect(screen.getByAltText('image')).toBeInTheDocument();
//   })
// })