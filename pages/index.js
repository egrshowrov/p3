import Nav from "@/component/Nav"
import { useSession, signIn, signOut } from "next-auth/react"
export default function Index() {
  const { data: session } = useSession()
  if(!session){
    return (
      <div className="bg-blue-900 h-screen w-screen flex justify-center items-center">
        <button className="bg-white text-blue-900 font-medium text-lg px-3 py-1 rounded-md hover:bg-slate-300 duration-300" onClick={()=>signIn('google')}>log in with google </button>
      </div>
    )
  }
  return (
    <div className="bg-blue-900 h-screen">
      <Nav></Nav>
    </div>
  )
}
