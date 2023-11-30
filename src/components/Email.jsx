import { useForm } from 'react-hook-form'
import axios from 'axios'

const Email = () => {
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm()

  const onSubmitHandler = (data) => {
    axios
      .post('http://localhost:4000/submit-email', data)
      .then((res) => console.log(res.data))
      .catch((error) => console.error(error))
  }

  return (
    <form onSubmit={onSubmit(onSubmitHandler)}>
      <input
        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        placeholder="Email"
      />
      {errors.email && <p>Please enter a valid email.</p>}
      <input type="submit" />
    </form>
  )
}

export default Email
