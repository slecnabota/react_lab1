export type CarResponse = {
  id: number
  brand: string
  model: string
  color: string
  registrationNumber: string
  modelYear: number
  price: number
}

export type CarEntry = Omit<CarResponse, 'id'>

export type Car = Partial<CarResponse>
