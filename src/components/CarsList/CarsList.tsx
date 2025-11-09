const cars = ['BMW', 'Toyota', 'Tesla']

export default function CarsList() {
  return (
    <ul className="list-disc ml-6">
      {cars.map((car, index) => (
        <li key={index}>{car}</li>
      ))}
    </ul>
  )
}
