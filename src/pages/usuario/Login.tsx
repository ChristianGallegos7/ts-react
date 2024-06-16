/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from 'react-hook-form';

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Aquí puedes manejar el envío del formulario, por ejemplo, hacer una solicitud a tu API
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#003459]">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              {...register('email', { required: 'El correo es obligatorio', pattern: { value: /^\S+@\S+$/i, message: 'Correo no válido' } })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#003459] focus:border-[#003459]"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              {...register('password', { required: 'La contraseña es obligatoria' })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#003459] focus:border-[#003459]"
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-[#003459] text-white rounded-md shadow-md hover:bg-[#00171f] transition duration-300">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};
