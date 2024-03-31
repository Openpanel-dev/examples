import { setProfileId } from "@openpanel/nextjs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Mock next-auth
export function useSession() {
  const [state, setState] = useState<{
    data: null | Record<string, unknown> & {
      email: string
      id: string
    }
    loading: boolean
  }>({ data: null, loading: true });
  useEffect(() =>{
    const data = localStorage.getItem("session");
    setTimeout(() => {
      setState({
        data: data ? JSON.parse(data) : null,
        loading: false
      })
    }, 150);
  }, [])
  return state
}

export function useAuth() {
  const { loading, data } = useSession()  
  const router = useRouter()
  useEffect(() => {
    if(loading === false) {
      if(data) {
        console.log('sety profile id');
        
        setProfileId(data.id)
      } else {
        router.push('/sign-in')
      }
    }
  },[data, loading])
}