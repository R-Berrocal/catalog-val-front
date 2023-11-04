import { useNavigate } from 'react-router-dom';
import { Button, Card } from '@material-tailwind/react';
import { useForm } from 'react-hook-form';
import { Input, Textarea } from '../../../../shared/components/form';

export default function ProductForm() {
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

          <Input
            style={{
              display: 'inline-block',
              padding: '8px 12px',
              fontSize: '14px',
              cursor: 'pointer',
            }}
            className="custom-file-input"
            control={control}
            name="file"
            label="Seleccione los archivos"
            errorMessage={''}
            multiple
            type="file"
          />
        </div>
        <div className="flex gap-5  justify-center items-center mt-5">
          <Button type="submit">Crear</Button>
          <Button onClick={handleClickCancel}>cancelar</Button>
        </div>
      </form>
    </Card>
  );
}
