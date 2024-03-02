
import { getServerSession } from 'next-auth'
 

export default async function Home() {

 
  const session = await getServerSession()
  console.log(session)

  return (
    <>
      getServerSession Result
      {
        session?.user ? <div>{session.user.name}</div> : <div>Not logged in</div>
      }
    </>
  )
}
