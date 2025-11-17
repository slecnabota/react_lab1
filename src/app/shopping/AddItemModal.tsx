'use client'

import { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'

type Props = {
  addItem: (item: { product: string; amount: string }) => void
}

export default function AddItemModal({ addItem }: Props) {
  const [open, setOpen] = useState(false)
  const [product, setProduct] = useState('')
  const [amount, setAmount] = useState('')

  const handleAdd = () => {
    addItem({ product, amount })
    setProduct('')
    setAmount('')
    setOpen(false)
  }

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Add
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Product"
            fullWidth
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Amount"
            fullWidth
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
