'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material'

export type Car = {
  id: number
  brand: string
  model: string
  year: number
}

type Props = {
  open: boolean
  onClose: () => void
  onSave: (car: Car) => void
  carToEdit?: Car | null
}

export default function CarFormModal({ open, onClose, onSave, carToEdit }: Props) {
  const [car, setCar] = useState<Car>({
    id: 0,
    brand: '',
    model: '',
    year: new Date().getFullYear(),
  })

  // Если редактирование — подставляем данные
  useEffect(() => {
    if (carToEdit) {
      setCar(carToEdit)
    } else {
      setCar({
        id: 0,
        brand: '',
        model: '',
        year: new Date().getFullYear(),
      })
    }
  }, [carToEdit])

  const handleSave = () => {
    onSave(car)
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>{carToEdit ? 'Edit Car' : 'Add Car'}</DialogTitle>

      <DialogContent>
        <TextField
          label="Brand"
          fullWidth
          margin="dense"
          value={car.brand}
          onChange={(e) => setCar({ ...car, brand: e.target.value })}
        />
        <TextField
          label="Model"
          fullWidth
          margin="dense"
          value={car.model}
          onChange={(e) => setCar({ ...car, model: e.target.value })}
        />
        <TextField
          label="Year"
          type="number"
          fullWidth
          margin="dense"
          value={car.year}
          onChange={(e) => setCar({ ...car, year: Number(e.target.value) })}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSave}>
          {carToEdit ? 'Save changes' : 'Add'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
