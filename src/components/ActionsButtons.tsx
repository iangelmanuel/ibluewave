import { useRouter } from 'next/navigation'
import Link from 'next/link'
import axios from 'axios'
import { Tooltip } from '@nextui-org/tooltip'
import { DeleteIcon, EyeIcon } from '@/svg/Icons'

export default function ActionsButtons ({ id }: { id: string }) {
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await axios.delete(`/api/contact/${id}`)
      router.refresh()
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message)
      }
    }
  }

  return (
    <>
      <Tooltip content="Ver contacto">
        <Link href={`/admin-dashboard/contact/${id}`}>
          <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
            <EyeIcon />
          </span>
        </Link>
      </Tooltip>

      <Tooltip color="danger" content="Borrar contacto">
        <form onSubmit={handleSubmit}>
          <button type="submit">
            <span className="text-lg text-danger cursor-pointer active:opacity-50">
              <DeleteIcon />
            </span>
          </button>
        </form>
      </Tooltip>
    </>
  )
}
