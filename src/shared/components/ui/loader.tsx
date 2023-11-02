import { Spinner } from '@material-tailwind/react';

export function Loader() {
  return (
    <div className="flex items-center justify-center w-full min-h-[300px]">
      <Spinner className="h-16 w-16 text-red-300" />
    </div>
  );
}
