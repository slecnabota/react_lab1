'use client'

import { useState } from 'react'
import { Dialog, DialogActions, DialogTitle, Button } from '@mui/material'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateCar } from '@/app/cars_api/api/carApi'
import { Car, CarResponse } from '@/app/cars_api/types/car'
import CarDialogContent from './CarDialogContent'

export default function EditCar({ cardata }: { cardata: CarResponse }) {
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
    mutationFn: updateCar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cars'] })
    },
  })

  const handleOpen = () => {
    setCar({
      brand: cardata.brand,
      model: cardata.model,
      color: cardata.color,
      registrationNumber: cardata.registrationNumber,
      modelYear: cardata.modelYear,
      price: cardata.price,
    })
    setOpen(true)
  }

  const handleSave = () => {
    mutation.mutate({
      ...car,
      id: cardata.id,
    })
    setOpen(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCar({ ...car, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Button size="small" variant="outlined" onClick={handleOpen}>
        Edit
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Edit Car</DialogTitle>

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
