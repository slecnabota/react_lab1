const cars = ['Car1', 'Car2', 'Car3']

export default function CarsList() {
  return (
    <ul className="list-disc ml-6">
      {cars.map((car, index) => (
        <li key={index}>{car}</li>
      ))}
    </ul>
  )
}
