import { GetServerSideProps } from "next"
import { User } from "next-auth"
import { getSession } from "next-auth/react"
import client from "../client/client"
import Home from "../containers/Home"
import { GetUserDocument } from "../generated/graphql"

interface Props {
  user: User
}

function Index({ user }: Props) {
  return (
    <div className="" >
        <Home user={user} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps  = async ({ req }) => {
  const session = await getSession({ req })
  const { data } = await client.query(GetUserDocument , { email: session?.user?.email }).toPromise()

  if(!session?.user) {
    return {
      props: {},
      redirect: {
        destination: '/login'
      }
    }
  }

  return {
    props: {
      user: data.getUser
    }
  }
}

export default Index