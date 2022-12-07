import { GetServerSideProps } from 'next'
import client from '../client'

interface Props {
  data: any
}

export default function Home({ data }: Props) {
  console.log(data)
  return (
    <div>
      Hello next App
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
