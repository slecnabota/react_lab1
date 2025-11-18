'use client'

import DialogContent from '@mui/material/DialogContent'
import { Car } from '@/app/cars_api/types/car'

type Props = {
  car: Car
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function CarDialogContent({ car, handleChange }: Props) {
  return (
    <DialogContent>
      <input
        className="border p-2 w-full"
        placeholder="Brand"
        name="brand"
        value={car.brand}
        onChange={handleChange}
      />
      <input
        className="border p-2 w-full"
        placeholder="Model"
        name="model"
        value={car.model}
        onChange={handleChange}
      />
      <input
        className="border p-2 w-full"
        placeholder="Color"
        name="color"
        value={car.color}
        onChange={handleChange}
      />
      <input
        className="border p-2 w-full"
        placeholder="Reg Number"
        name="registrationNumber"
        value={car.registrationNumber}
        onChange={handleChange}
      />
      <input
        className="border p-2 w-full"
        placeholder="Year"
        name="modelYear"
        value={car.modelYear}
        onChange={handleChange}
      />
      <input
        className="border p-2 w-full"
        placeholder="Price"
        name="price"
        value={car.price}
        onChange={handleChange}
      />
    </DialogContent>
  )
}
