import * as React from 'react'
import { Form, Link, href } from 'react-router'
import {
  FormProvider,
  getInputProps,
  getFormProps,
  type FormMetadata,
} from '@conform-to/react'
import { FormField, FormLabel, FormMessage } from '~/components/ui/form'
import { Card, CardContent } from '~/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Upload, User, MapPin, Loader2 } from 'lucide-react'

type UserFormProps<Schema extends Record<string, any>, FormError = string[]> = {
  form: FormMetadata<Schema, FormError>
  fields: ReturnType<FormMetadata<Schema, FormError>['getFieldset']>
  isLoading: () => boolean
}

export default function UserForm<Schema extends Record<string, any>>({
  form,
  fields,
  isLoading,
}: UserFormProps<Schema>) {
  const [avatarPreview, setAvatarPreview] = React.useState<string>('')

  const handleSetAvatarPreview = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = () => {
          setAvatarPreview(reader.result as string)
        }

        reader.readAsDataURL(file)
      }
    },
    []
  )

  return (
    <Card className="w-full shadow-none rounded-sm">
      <CardContent>
        <FormProvider context={form.context}>
          <Form
            {...getFormProps(form)}
            method="PATCH"
            className="space-y-8 flex flex-col"
            noValidate
            encType="multipart/form-data"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Personal Information Section */}
              <div className="space-y-8">
                <div className="flex items-center gap-2 pb-4 border-b">
                  <User className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">
                    Personal Information
                  </h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField>
                    <FormLabel>
                      First Name
                      <span className="text-destructive">*</span>
                    </FormLabel>
                    <Input
                      {...getInputProps(fields.firstName, { type: 'text' })}
                      placeholder="John"
                    />
                    <FormMessage id={fields.firstName.errorId}>
                      {fields.firstName.errors}
                    </FormMessage>
                  </FormField>

                  <FormField>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      {...getInputProps(fields.lastName, { type: 'text' })}
                      placeholder="Doe"
                    />
                    <FormMessage id={fields.lastName.errorId}>
                      {fields.lastName.errors}
                    </FormMessage>
                  </FormField>
                </div>

                <FormField className="w-full">
                  <FormLabel>
                    Email
                    <span className="text-destructive">*</span>
                  </FormLabel>
                  <Input
                    {...getInputProps(fields.email, { type: 'email' })}
                    placeholder="john.doe@example.com"
                  />
                  <FormMessage id={fields.email.errorId}>
                    {fields.email.errors}
                  </FormMessage>
                </FormField>

                <FormField className="w-full">
                  <FormLabel className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Location
                  </FormLabel>
                  <Input
                    {...getInputProps(fields.location, { type: 'text' })}
                    placeholder="San Francisco, CA"
                  />
                  <FormMessage id={fields.location.errorId}>
                    {fields.location.errors}
                  </FormMessage>
                </FormField>
              </div>

              {/* Profile Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-4 border-b">
                  <Upload className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Profile</h3>
                </div>

                <div className="flex items-center gap-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={avatarPreview} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div className="flex gap-2">
                    <Input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="avatar"
                      onChange={handleSetAvatarPreview}
                      name="avatar"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById('avatar')?.click()}
                    >
                      Upload Avatar
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 w-fit self-end">
              <Button type="submit" className="flex-1" disabled={isLoading()}>
                {isLoading() && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Submit
              </Button>
              <Button
                asChild
                type="button"
                variant="outline"
                className="flex-1"
              >
                <Link to={href('/users')}>Cancel</Link>
              </Button>
            </div>
          </Form>
        </FormProvider>
      </CardContent>
    </Card>
  )
}
