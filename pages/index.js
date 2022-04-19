import Tweet from "../components/Tweet"
import { Body, GlobalStyle } from "../styles/styles"
import shrek from "../public/shrek.jpg"
import AddTweet from "../components/AddTweet"
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import Header from "../components/Header"

export async function getServerSideProps() {
  const res = await fetch(`https://backend-342981244121234.herokuapp.com/tweets`)
  const data = await res.json()
  return { props: { data } }
}

export default function Home({data}) {
  const router = useRouter();
  const refreshData = () => {
      router.replace(router.asPath)
  }
  const fdata = data
  fdata.reverse()
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
       
        fdata.map((tweet) => {
          return <Tweet
            id={tweet._id}
            key={tweet._id}
            image={tweet.Image}
            accName={tweet.AccName}
            atName={tweet.AtName}
            text={tweet.Text}
            likes={tweet.Likes}
            comments={tweet.Comments}
            shares={tweet.Shares}
          />
        })
      }
    </Body>
    
    </>
  )
}
