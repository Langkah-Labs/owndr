import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { cn } from '~/lib/utils'
import { Label } from '~/components/ui/label'

const FormField = ({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="form-field"
      className={cn('grid gap-2', className)}
      {...props}
    >
      {children}
    </div>
  )
}

const FormLabel = ({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) => {
  return (
    <Label
      data-slot="form-label"
      className={cn('data-[error=true:text-destructive-foreground')}
      {...props}
    />
  )
}

const FormDescription = ({
  className,
  ...props
}: React.ComponentProps<'p'>) => {
  return (
    <p
      data-slot="form-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

const FormMessage = ({ className, ...props }: React.ComponentProps<'p'>) => {
  const body = props.children

  if (!body) {
    return null
  }

  return (
    <p
      data-slot="form-message"
      className={cn('text-destructive text-sm', className)}
      {...props}
    >
      {body}
    </p>
  )
}

export { FormField, FormLabel, FormDescription, FormMessage }
