'use client'

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid'
import { getCars, deleteCar } from '@/app/cars_api/api/carApi'
import Snackbar from '@mui/material/Snackbar'
import AddCar from './modals/AddCar'
import EditCar from './modals/EditCar'
import ConfirmDeleteModal from './modals/ConfirmDeleteModal'
import { logout } from '@/services/auth'

export default function CarsPage() {
  const queryClient = useQueryClient()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['cars'],
    queryFn: getCars,
  })

  const [deleteOpen, setDeleteOpen] = useState(false)
  const [deleteUrl, setDeleteUrl] = useState<number | null>(null)
  const [toastOpen, setToastOpen] = useState(false)

  const delMutation = useMutation({
    mutationFn: deleteCar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cars'] })
      setToastOpen(true)
    },
  })

  const handleDelete = () => {
    if (deleteUrl) delMutation.mutate(deleteUrl)
    setDeleteOpen(false)
  }

  const columns: GridColDef[] = [
    { field: 'brand', headerName: 'Brand', width: 140 },
    { field: 'model', headerName: 'Model', width: 140 },
    { field: 'color', headerName: 'Color', width: 140 },
    { field: 'registrationNumber', headerName: 'Reg Nr.', width: 160 },
    { field: 'modelYear', headerName: 'Year', width: 100 },
    { field: 'price', headerName: 'Price', width: 120 },

    {
      field: 'edit',
      headerName: '',
      width: 90,
      renderCell: (params) => <EditCar cardata={params.row} />,
    },

    {
      field: 'delete',
      headerName: '',
      width: 90,
      renderCell: (params) => (
        <button
          className="text-red-600 underline"
          onClick={() => {
            setDeleteUrl(params.row.id)
            setDeleteOpen(true)
          }}
        >
          Delete
        </button>
      ),
    },
  ]

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading cars</p>

  return (
    <>
      <div className="p-6">
        <div className="flex align-super gap-2">
          <AddCar />

          <button onClick={logout} className="px-4 py-2 bg-red-600 text-white rounded">
            Logout
          </button>
        </div>

        <div style={{ height: 600, width: '100%', marginTop: 20 }}>
          <DataGrid
            rows={data || []}
            columns={columns}
            getRowId={(row) => row.id}
            disableRowSelectionOnClick
            slots={{ toolbar: GridToolbar }}
          />
        </div>
      </div>

      <ConfirmDeleteModal
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={handleDelete}
        text="Do you really want to delete this car?"
      />

      <Snackbar
        open={toastOpen}
        autoHideDuration={2000}
        onClose={() => setToastOpen(false)}
        message="Car deleted"
      />
    </>
  )
}
