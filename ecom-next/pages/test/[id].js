import { useRouter } from 'next/router'

const DisplayId = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>You entered {id}</div>
    )
}

export default DisplayId;