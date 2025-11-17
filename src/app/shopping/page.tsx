'use client'

import { useState } from 'react'
import { List, ListItem, ListItemText } from '@mui/material'
import AddItemModal from './AddItemModal'

type Item = {
  product: string
  amount: string
}

export default function ShoppingPage() {
  const [items, setItems] = useState<Item[]>([])

  const addItem = (item: Item) => {
    setItems([item, ...items])
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping List (MUI)</h1>

      <AddItemModal addItem={addItem} />

      <List>
        {items.map((item, index) => (
          <ListItem key={index} divider>
            <ListItemText primary={item.product} secondary={item.amount} />
          </ListItem>
        ))}
      </List>
    </main>
  )
}
