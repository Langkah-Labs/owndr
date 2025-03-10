import type { Route } from './+types/route'
import { href, useActionData, redirect, useNavigation } from 'react-router'
import { useForm } from '@conform-to/react'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'
import { parseFormData } from '@mjackson/form-data-parser'
import { userInsertSchema } from 'db/schema'
import createUser from '~/routes/users.new/create-user.server'
import uploadAvatar from '~/routes/users/upload-avatar.server'
import UserForm from '~/routes/users/user-form'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Create a New User | Owndr' },
    { name: 'description', content: 'Creating a new user' },
  ]
}

/**
 * This action function will be called on the server.
 * So, it's safe to run any database queries, third-party requests, or even manipulating response.
 */
export async function action({ context, request }: Route.ActionArgs) {
  const formData = await parseFormData(request, uploadAvatar)
  const submission = parseWithZod<typeof userInsertSchema>(formData, {
    schema: userInsertSchema,
  })

  if (submission.status !== 'success') {
    return submission.reply()
  }

  try {
    await createUser(context, submission.value)
  } catch (err) {
    return submission.reply({
      formErrors: ['Failed to create a user, please try again later'],
    })
  }

  return redirect(href('/users'))
}

export async function loader({ request }: Route.LoaderArgs) {
  return {
    defaultValue: {
      firstName: '',
      lastName: '',
      email: '',
      location: '',
      avatar: '',
    },
  }
}

export default function Page({ loaderData }: Route.ComponentProps) {
  const { defaultValue } = loaderData
  const navigation = useNavigation()
  const lastResult = useActionData<typeof action>()

  const [form, fields] = useForm({
    lastResult: navigation.state !== 'idle' ? lastResult : null,
    constraint: getZodConstraint(userInsertSchema),
    defaultValue,
  })

  const isLoading = () => navigation.formAction === '/users/new'

  return (
    <div className="container mx-auto flex flex-col mt-8 gap-7">
      <header>
        <h1 className="font-bold text-2xl text-gray-700">Create New User</h1>
        <h2 className="font-normal text-lg text-gray-400">
          Add a new user and provides its information.
        </h2>
      </header>

      <UserForm form={form} fields={fields} isLoading={isLoading} />
    </div>
  )
}
