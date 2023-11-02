import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import usePersistedStore from '../../../store';

export function DialogDefault({
  children,
  title,
}: {
  children: JSX.Element;
  title: string;
}) {
  const { isOpenDialog, showDialog, closeDialog } = usePersistedStore();

  return (
    <Dialog
      size="xl"
      open={isOpenDialog}
      handler={isOpenDialog ? closeDialog : showDialog}
      className="max-h-[600px] overflow-y-scroll"
    >
      <DialogHeader>{title}</DialogHeader>
      <DialogBody className="flex items-center justify-center">
        {children}
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={closeDialog}
          className="mr-1"
        >
          Cerrar
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
