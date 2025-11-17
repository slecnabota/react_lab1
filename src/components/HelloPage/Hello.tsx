type Props = {
  name: string
}

export default function HelloPage({ name }: Props) {
  return <h1 className="text-2xl font-bold">Hello {name}</h1>
}
