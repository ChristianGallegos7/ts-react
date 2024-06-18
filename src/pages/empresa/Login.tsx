/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../../components/ErrorMessage';
import { useMutation } from '@tanstack/react-query';
import { loginEmpresa } from '../../api/EmpresaAPI';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const LoginEmpresa = () => {

  const navigate = useNavigate()

  const initialValues = {
    email: '',
    password: ''
  };

  const { register, handleSubmit, formState: { errors }, reset } = useForm({ defaultValues: initialValues });

  const { mutate } = useMutation({
    mutationFn: loginEmpresa,
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
      <div className="bg-white rounded-lg shadow-md w-full max-w-4xl flex overflow-hidden">
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#003459]">Iniciar Sesión</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            <button type="submit" className="w-full py-2 px-4 bg-[#003459] text-white rounded-md shadow-md hover:bg-[#00171f] transition duration-300">Iniciar Sesión</button>
          </form>
        </div>
        <div className="hidden md:block md:w-1/2">
          <img src="/login.jpg" alt="Imagen de login" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};
