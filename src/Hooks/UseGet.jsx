import { useQuery } from "@tanstack/react-query"


export default function useGets(path,name){
    const url = import.meta.env.VITE_URL

    return useQuery({
        queryKey: [name],
        queryFn: async () => {
            const res = await fetch(`${url}${path}`)
            return await res.json()
        },
    })
    
}