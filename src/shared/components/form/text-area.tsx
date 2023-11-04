import {
  Textarea as TextareaMaterial,
  TextareaProps,
  Typography,
} from '@material-tailwind/react'
import { Control, Controller } from 'react-hook-form'

interface InputComponentProps extends TextareaProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  errorMessage: string
}

export const Textarea = ({
  control,
  name = '',
  errorMessage,
  ...rest
}: InputComponentProps) => {
  return (
    <div className="flex flex-col w-full">
      <Controller
        render={({ field }) => <TextareaMaterial {...rest} {...field} />}
        control={control}
        name={name}
      />
      <Typography className="text-red-400 text-xs italic">
        {errorMessage}
      </Typography>
    </div>
  )
}
