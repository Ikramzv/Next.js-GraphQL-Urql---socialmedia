import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import client from '../client'

interface Props {
  data: any
}

export default function Home({  }: Props) {
  const { data: session } = useSession()

  useEffect(() => {
    
  }, [session])
  
  return (
    <div className='' >
      
    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async ({  }) => {
  const data = await client.fetch(`*[_type == "post"]`)
  
  return {
    props: {
      data
    }
  }
}