/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../../components/ErrorMessage';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query'
import { crearEmpresa } from '../../api/EmpresaAPI';
import { useNavigate } from 'react-router-dom';

export const RegistroEmpresa = () => {

  const navigate = useNavigate()

  const initialValues = {
    nombre: '',
    correo: '',
    password: '',
    direccion: '',
    telefono: '',
    web: '',
    descripcion: '',
    ruc: ''
  };

  const { register, handleSubmit, formState: { errors }, reset } = useForm({ defaultValues: initialValues });

  const { mutate } = useMutation({
    mutationFn: crearEmpresa,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: (data) => {
      toast.success(data)
      reset();
      navigate('/empresa/login');
    }
  })

  const onSubmit = (data: any) => {
    mutate(data)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#003459]">Registro - Empresa</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre de la Empresa</label>
              <input
                type="text"
                id="nombre"
                {...register('nombre', { required: 'El nombre de la empresa es obligatorio' })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#003459] focus:border-[#003459]"
              />
              {errors.nombre && <ErrorMessage>{errors.nombre.message}</ErrorMessage>}
            </div>
            <div>
              <label htmlFor="ruc" className="block text-sm font-medium text-gray-700">RUC</label>
              <input
                type="text"
                id="ruc"
                {...register('ruc', { required: 'El RUC es obligatorio', pattern: { value: /^[0-9]+$/i, message: 'RUC no válido' } })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#003459] focus:border-[#003459]"
              />
              {errors.ruc && <ErrorMessage>{errors.ruc.message}</ErrorMessage>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
              <input
                type="email"
                id="correo"
                {...register('correo', { required: 'El correo es obligatorio', pattern: { value: /^\S+@\S+$/i, message: 'Correo no válido' } })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#003459] focus:border-[#003459]"
              />
              {errors.correo && <ErrorMessage>{errors.correo.message}</ErrorMessage>}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
              <input
                type="password"
                id="password"
                {...register('password', { required: 'La contraseña es obligatoria' })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#003459] focus:border-[#003459]"
              />
              {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            </div>
            <div>
              <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">Dirección</label>
              <input
                type="text"
                id="direccion"
                {...register('direccion', { required: 'La dirección es obligatoria' })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#003459] focus:border-[#003459]"
              />
              {errors.direccion && <ErrorMessage>{errors.direccion.message}</ErrorMessage>}
            </div>
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                {...register('telefono', { required: 'El teléfono es obligatorio', pattern: { value: /^[0-9]+$/i, message: 'Teléfono no válido' } })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#003459] focus:border-[#003459]"
              />
              {errors.telefono && <ErrorMessage>{errors.telefono.message}</ErrorMessage>}
            </div>
            <div>
              <label htmlFor="web" className="block text-sm font-medium text-gray-700">Sitio Web</label>
              <input
                type="url"
                id="web"
                {...register('web', { required: 'El sitio web es obligatorio' })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#003459] focus:border-[#003459]"
              />
              {errors.web && <ErrorMessage>{errors.web.message}</ErrorMessage>}
            </div>
            <div>
              <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">Descripción</label>
              <textarea
                id="descripcion"
                {...register('descripcion', { required: 'La descripción es obligatoria' })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#003459] focus:border-[#003459]"
              ></textarea>
              {errors.descripcion && <ErrorMessage>{errors.descripcion.message}</ErrorMessage>}
            </div>
            <button type="submit" className="w-full py-2 px-4 bg-[#003459] text-white rounded-md shadow-md hover:bg-[#00171f] transition duration-300">Registrarse</button>
          </form>
        </div>
        <div className="md:w-1/2 p-4 hidden md:flex items-center justify-center">
          <img src="/registrar.jpg" alt="Imagen de registro" className="w-full h-full object-cover rounded-r-lg" />
        </div>
      </div>
    </div>
  );
};
