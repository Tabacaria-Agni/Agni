import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CartProvider } from './providers/CartContext'
import { ProductsProvider } from './providers/ProductsContext'
import { UserProvider } from './providers/UserContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </CartProvider>
    </UserProvider>
  </React.StrictMode>,
)
