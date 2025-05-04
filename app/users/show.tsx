import type { Route } from './+types/show'
import { redirect, href, useNavigation, useActionData } from 'react-router'
import deleteUser from './.server/delete-user'
import getUserById from './.server/get-user-by-id'
import { useForm } from '@conform-to/react'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'
import { userSchema } from '~/app/users/schema'
import { parseFormData } from '@mjackson/form-data-parser'
import uploadAvatar from '~/app/users/.server/upload-avatar'
import updateUser from './.server/update-user'
import UserForm from '~/app/users/user-form'

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
    const formData = await parseFormData(request, (file) =>
      uploadAvatar(context.cloudflare.env, file)
    )
    const submission = parseWithZod<typeof userSchema>(formData, {
      schema: userSchema,
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

  const [form, fields] = useForm<typeof user>({
    lastResult: navigation.state !== 'idle' ? lastResult : null,
    constraint: getZodConstraint(userSchema),
    defaultValue: user,
  })

  const isLoading = () => {
    const id = user.id as string

    return navigation.formAction === href('/users/:id', { id })
  }

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
