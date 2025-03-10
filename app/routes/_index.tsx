import type { Route } from './+types/_index'
import { Navbar } from '~/components/navbar'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Owndr' },
    { name: 'description', content: 'Welcome to Owndr!' },
  ]
}

export async function loader({ request }: Route.LoaderArgs) {}

export default function Index({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col flex-1 h-full items-center justify-center gap-2 mt-8">
        <p className="text-md font-normal">Welcome to Owndr!</p>
      </div>
    </>
  )
}
