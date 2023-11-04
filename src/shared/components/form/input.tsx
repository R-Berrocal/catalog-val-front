import {
  Input as InputMaterial,
  InputProps,
  Typography,
} from '@material-tailwind/react'
import { Control, Controller } from 'react-hook-form'

interface InputComponentProps extends InputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  errorMessage: string
}

export const Input = ({
  control,
  name = '',
  errorMessage,
  ...rest
}: InputComponentProps) => {
  return (
    <div className="flex flex-col w-full">
      <Controller
        render={({ field }) => (
          <InputMaterial
            {...rest}
            {...field}
            crossOrigin={undefined}
            className="!py-2"
          />
        )}
        control={control}
        name={name}
      />
      <Typography className="text-red-400 text-xs italic">
        {errorMessage}
      </Typography>
    </div>
  )
}
