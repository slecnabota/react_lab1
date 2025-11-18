'use client'

import { useState } from 'react'
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addCar } from '@/app/cars_api/api/carApi'
import { Car } from '@/app/cars_api/types/car'
import CarDialogContent from './CarDialogContent'

export default function AddCar() {
  const [open, setOpen] = useState(false)
  const [car, setCar] = useState<Car>({
    brand: '',
    model: '',
    color: '',
    registrationNumber: '',
    modelYear: 0,
    price: 0,
  })

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: addCar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cars'] })
    },
  })
  const handleSave = () => {
    mutation.mutate(car)
    setOpen(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCar({ ...car, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        + New Car
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>New Car</DialogTitle>

        <CarDialogContent car={car} handleChange={handleChange} />

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
