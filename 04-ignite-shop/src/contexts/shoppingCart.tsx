import { createContext, useState } from 'react'

export interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: string
  defaultPriceId: string
}

interface ShoppingCartContextData {
  products: ProductProps[]
  addProduct: (product: ProductProps) => void
  removeProduct: (productId: string) => void
  removeAllProducts: () => void
}

interface ShoppingCartProviderProps {
  children: React.ReactNode
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextData)

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [products, setProducts] = useState<ProductProps[]>([])

  function addProduct(product: ProductProps) {
    setProducts((state) => [
      ...state,
      {
        quantity: 1,
        ...product,
      },
    ])
  }

  function removeProduct(productId: string) {
    setProducts((state) => state.filter((product) => product.id !== productId))
  }

  function removeAllProducts() {
    setProducts([])
  }

  return (
    <ShoppingCartContext.Provider
      value={{ products, addProduct, removeProduct, removeAllProducts }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
