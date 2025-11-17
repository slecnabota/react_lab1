'use client'

import { useState } from 'react'
import CarAppBar from './CarAppBar'
import { Box, Button, Typography, Paper } from '@mui/material'
import CarFormModal, { Car } from './CarFormModal'
import ConfirmDeleteModal from './ConfirmDeleteModal'

export default function CarsPage() {
  const [cars, setCars] = useState<Car[]>([
    { id: 1, brand: 'BMW', model: 'X5', year: 2020 },
    { id: 2, brand: 'Toyota', model: 'Corolla', year: 2022 },
  ])

  const [formOpen, setFormOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)

  const [carToEdit, setCarToEdit] = useState<Car | null>(null)
  const [carToDelete, setCarToDelete] = useState<Car | null>(null)

  const handleSaveCar = (car: Car) => {
    if (carToEdit) {
      setCars(cars.map((c) => (c.id === carToEdit.id ? { ...car, id: carToEdit.id } : c)))
    } else {
      setCars([...cars, { ...car, id: Date.now() }])
    }
  }

  const handleDeleteCar = () => {
    if (carToDelete) {
      setCars(cars.filter((c) => c.id !== carToDelete.id))
    }
    setDeleteOpen(false)
  }

  return (
    <main>
      <CarAppBar />

      <Box sx={{ padding: 4 }}>
        <Typography variant="h5" gutterBottom>
          Car List
        </Typography>

        <Button
          variant="contained"
          onClick={() => {
            setCarToEdit(null)
            setFormOpen(true)
          }}
        >
          + Add Car
        </Button>

        <Paper sx={{ marginTop: 3, padding: 2 }}>
          <table className="min-w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2 text-left">Brand</th>
                <th className="border p-2 text-left">Model</th>
                <th className="border p-2 text-left">Year</th>
                <th className="border p-2 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {cars.map((car) => (
                <tr key={car.id} className="border-b">
                  <td className="p-2">{car.brand}</td>
                  <td className="p-2">{car.model}</td>
                  <td className="p-2">{car.year}</td>
                  <td className="p-2 text-center">
                    <Button
                      variant="outlined"
                      color="info"
                      size="small"
                      sx={{ mr: 1 }}
                      onClick={() => {
                        setCarToEdit(car)
                        setFormOpen(true)
                      }}
                    >
                      Edit
                    </Button>

                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => {
                        setCarToDelete(car)
                        setDeleteOpen(true)
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Paper>
      </Box>

      <CarFormModal
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSave={handleSaveCar}
        carToEdit={carToEdit}
      />

      <ConfirmDeleteModal
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={handleDeleteCar}
        itemName={carToDelete?.brand || ''}
      />
    </main>
  )
}
