import type { Route } from './+types/route'
import { redirect, href, useNavigation, useActionData } from 'react-router'
import deleteUser from './delete-user.server'
import getUserById from './get-user-by-id.server'
import { useForm } from '@conform-to/react'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'
import { userUpdateSchema } from 'db/schema'
import { parseFormData } from '@mjackson/form-data-parser'
import uploadAvatar from '~/routes/users/upload-avatar.server'
import updateUser from './update-user.server'
import UserForm from '~/routes/users/user-form'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Update User | Owndr' },
    { name: 'description', content: 'Update user information' },
  ]
}

export async function loader({ context, params, request }: Route.LoaderArgs) {
  const user = await getUserById(context, params.id)

  return { user }
}

export async function action({ context, params, request }: Route.ActionArgs) {
  if (request.method === 'DELETE') {
    await deleteUser(context, params.id)

    return redirect(href('/users'))
  } else if (request.method === 'PATCH') {
    const formData = await parseFormData(request, uploadAvatar)
    const submission = parseWithZod<typeof userUpdateSchema>(formData, {
      schema: userUpdateSchema,
    })

    if (submission.status !== 'success') {
      return submission.reply()
    }

    try {
      await updateUser(context, params.id, submission.value)
    } catch (err) {
      return submission.reply({
        formErrors: ['Failed to update the user, please try again later'],
      })
    }

    return redirect(href('/users'))
  }
}

export default function Page({ loaderData }: Route.ComponentProps) {
  const { user } = loaderData
  const navigation = useNavigation()
  const lastResult = useActionData<typeof action>()

  const [form, fields] = useForm({
    lastResult: navigation.state !== 'idle' ? lastResult : null,
    constraint: getZodConstraint(userUpdateSchema),
    defaultValue: user,
  })

  const isLoading = () =>
    navigation.formAction === href('/users/:id', { id: user.id.toString() })

  return (
    <div className="container mx-auto flex flex-col mt-8 gap-7">
      <header>
        <h1 className="font-bold text-2xl text-gray-700">Update User</h1>
        <h2 className="font-normal text-lg text-gray-400">
          Update the user information.
        </h2>
      </header>

      <UserForm form={form} fields={fields} isLoading={isLoading} />
    </div>
  )
}
