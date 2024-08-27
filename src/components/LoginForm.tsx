import { useRouter } from "next/navigation"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { toast } from "react-toastify"
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import {
  emailValidation,
  passwordValidation
} from "@/validations/loginValidations"

export default function LoginForm() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = handleSubmit(async ({ email, password }) => {
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false
      })

      if (res?.error !== null && res?.error !== undefined) {
        console.log(res.error)
        return toast.error("Ha ocurrido un error, intentalo mas tarde", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
        })
      }

      router.refresh()
      router.push("/")
      reset()
    } catch (error) {
      console.log(error)
    }
  })

  return (
    <form
      noValidate
      autoComplete="on"
      onSubmit={onSubmit}
      className="mx-auto md:w-full bg-zinc-950 border-2 border-zinc-800 p-5 rounded-xl"
    >
      <div className="space-y-5">
        <Input
          type="email"
          variant="bordered"
          label="Correo Electrónico"
          {...register("email", emailValidation)}
        />
        {errors.email !== null && (
          <span className="text-sm text-red-500">
            {errors.email?.message as string}
          </span>
        )}
        <Input
          type="password"
          variant="bordered"
          label="Contraseña"
          {...register("password", passwordValidation)}
        />
        {errors.password !== null && (
          <span className="text-sm text-red-500">
            {errors.password?.message as string}
          </span>
        )}
      </div>

      <div className="flex gap-3 lg:gap-0 flex-col lg:flex-row justify-between items-center mt-3">
        <p className="text-red-500 font-bold">
          NOTA:{" "}
          <span className="text-zinc-300 font-normal">
            Si no eres propietario o una persona autorizada por favor vuelve al{" "}
            <Link
              href="/"
              className="font-semibold hover:underline"
            >
              inicio
            </Link>
          </span>
        </p>
        <Button
          type="submit"
          color="primary"
          size="md"
          className="w-full lg:w-auto"
        >
          Iniciar Sesión
        </Button>
      </div>
    </form>
  )
}
