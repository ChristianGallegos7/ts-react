/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../../components/ErrorMessage';

export const RegistroUsuario = () => {
  const initialValues = {
    nombre: '',
    apellido: '',
    edad: '',
    telefono: '',
    email: '',
    password: ''
  };

  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues });

  const onSubmit = (data: any) => {
    console.log(data);
    // Aquí puedes manejar el envío del formulario, por ejemplo, hacer una solicitud a tu API
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#003459]">Registro - Usuario</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              id="nombre"
              {...register('nombre', { required: 'El nombre es obligatorio' })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#003459] focus:border-[#003459]"
            />
            {errors.nombre && <ErrorMessage>{errors.nombre.message}</ErrorMessage>}
          </div>
          <div>
            <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">Apellido</label>
            <input
              type="text"
              id="apellido"
              {...register('apellido', { required: 'El apellido es obligatorio' })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#003459] focus:border-[#003459]"
            />
            {errors.apellido && <ErrorMessage>{errors.apellido.message}</ErrorMessage>}
          </div>
          <div>
            <label htmlFor="edad" className="block text-sm font-medium text-gray-700">Edad</label>
            <input
              type="number"
              id="edad"
              {...register('edad', { required: 'La edad es obligatoria', min: { value: 18, message: 'Debes tener al menos 18 años' } })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#003459] focus:border-[#003459]"
            />
            {errors.edad && <ErrorMessage>{errors.edad.message}</ErrorMessage>}
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
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'El correo es obligatorio', pattern: { value: /^\S+@\S+$/i, message: 'Correo no válido' } })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#003459] focus:border-[#003459]"
            />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
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
          <button type="submit" className="w-full py-2 px-4 bg-[#003459] text-white rounded-md shadow-md hover:bg-[#00171f] transition duration-300">Registrarse</button>
        </form>
        <div className="hidden md:block md:w-1/2">
          <img src="/registrar.jpg" alt="Imagen de registro" className="w-full h-full object-cover mt-6 rounded-md" />
        </div>
      </div>
    </div>
  );
};
