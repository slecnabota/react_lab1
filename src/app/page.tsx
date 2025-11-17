import HelloPage from '@/components/HelloPage/Hello'
import CounterPage from '@/components/Counter/Counter'
import CarsList from '@/components/CarsList/CarsList'
import FormPage from '@/components/Form/Form'

export default function Home() {
  return (
    <main className="p-6 space-y-6 flex flex-col gap-3 w-max">
      <HelloPage name="Akbota" />
      <FormPage />
      <CounterPage />
      <CarsList />
    </main>
  )
}
