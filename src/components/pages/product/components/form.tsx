import { useNavigate } from 'react-router-dom';
import { Button, Card } from '@material-tailwind/react';
import { useForm } from 'react-hook-form';
import { Input, Textarea } from '../../../../shared/components/form';
import { useDropzone } from 'react-dropzone';

export default function ProductForm() {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      'image/png': [],
      'image/jpg': [],
      'image/jpeg': [],
    },
  });

  const files = acceptedFiles.map((file) => {
    return (
      <div key={file.name} className="p-4 rounded-lg flex flex-col">
        <img
          className="rounded-lg w-full h-full object-cover"
          src={URL.createObjectURL(file)}
          alt={file.name}
        />
      </div>
    );
  });

  const navigate = useNavigate();
  const { control } = useForm({
    mode: 'all',
  });

  const handleClickCancel = () => {
    navigate(-1);
  };
  return (
    <Card
      color="transparent"
      shadow={false}
      className="flex justify-center items-center"
    >
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 ">
        <div className="flex flex-col gap-4">
          <Input
            control={control}
            name="name"
            label="Nombre"
            errorMessage={''}
          />
          <Textarea
            control={control}
            name="description"
            label="Descripcion"
            errorMessage={''}
          />
          <Input
            control={control}
            name="price"
            label="Precio"
            errorMessage={''}
            type="number"
          />
          <section
            className="flex flex-col justify-center items-center border border-blue-gray-200 rounded-md cursor-pointer"
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            {files.length > 0 ? (
              <div className="grid grid-cols-3">{files}</div>
            ) : (
              <p className="text-sm text-blue-gray-500 text-center">
                Arrastre y suelte algunas imagenes aquí o haga clic para
                seleccionar archivos
              </p>
            )}
          </section>
        </div>
        <div className="flex gap-5  justify-center items-center mt-5">
          <Button type="submit">Crear</Button>
          <Button onClick={handleClickCancel}>cancelar</Button>
        </div>
      </form>
    </Card>
  );
}
