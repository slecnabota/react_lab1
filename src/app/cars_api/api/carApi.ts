import { Car, CarResponse } from '@/app/cars_api/types/car'

import api from '@/lib/api'

export const getCars = async (): Promise<CarResponse[]> => {
  const res = await api.get('/api/cars/get-all-cars')
  return res.data
}

export const deleteCar = async (id: number): Promise<CarResponse> => {
  const res = await api.delete(`/api/cars/${id}`)
  return res.data
}

export const addCar = async (car: Car): Promise<CarResponse> => {
  const res = await api.post(`/api/cars`, car)
  return res.data
}

export const updateCar = async (car: Car): Promise<CarResponse> => {
  const res = await api.put(`/api/cars/${car.id}`, car)
  return res.data
}
