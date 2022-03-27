import Tweet from "../components/Tweet"
import { Body, GlobalStyle } from "../styles/styles"
import shrek from "../public/shrek.jpg"
import AddTweet from "../components/AddTweet"
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import Header from "../components/Header"

export async function getServerSideProps() {
  const res = await fetch(`https://backend33423.herokuapp.com/tweets`)
  const data = await res.json()
  return { props: { data } }
}

export default function Home({data}) {
  const router = useRouter();
  const refreshData = () => {
      router.replace(router.asPath)
  }

  const { data: session, status } = useSession()
  const loading = status === "loading"
  console.log(session)
  return (
    <>
    <GlobalStyle/>
    <Header/>

    <Body>
      <AddTweet
      refresher = {refreshData}
      />
      {
        data.map((tweet) => {
          
          return <Tweet
            id={tweet.id}
            key={tweet.id}
            image={tweet.image}
            accName={tweet.accName}
            atName={tweet.atName}
            text={tweet.text}
            likes={tweet.likes}
            comments={tweet.comments}
            shares={tweet.shares}
          />
        })
      }
    </Body>
    
    </>
  )
}
