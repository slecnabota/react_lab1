import Hello from '@/components/Hello/Hello'
import Counter from '@/components/Counter/Counter'
import CarsList from '@/components/CarsList/CarsList'
import Form from '@/components/Form/Form'

export default function Home() {
  return (
    <main className="p-6 space-y-6">
      <Hello user="Akbota" />
      <Counter />
      <CarsList />
      <Form />
    </main>
  )
}
