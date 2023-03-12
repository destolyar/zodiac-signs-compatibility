import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter()
  const { pair } = router.query 
  
  return (
    <div>
      generated page for {pair}
    </div>
  )
} 