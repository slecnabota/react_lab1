type HelloProps = {
  user: string
}

export default function Hello({ user }: HelloProps) {
  return <h1 className="text-2xl font-bold">Hello {user}</h1>
}
