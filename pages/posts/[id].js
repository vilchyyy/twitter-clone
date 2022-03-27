import { Body, GlobalStyle } from "../../styles/styles"
import Tweet from "../../components/Tweet"
import { useRouter } from 'next/router'
import AddComment from "../../components/AddComment"
import shrek from "../../public/shrek.jpg"
import Header from "../../components/Header"

export async function getServerSideProps() {
    const res = await fetch(`https://backend323423.herokuapp.com/tweets`)
    const data = await res.json()
    return { props: { data } }
  }

export default function Post({data}) {
    const router = useRouter()
    const refreshData = () => {
        router.replace(router.asPath)
    }
    const { id } = router.query
    let tweet
    tweet = data.find(x => x.id == id)
    return (
    <>
    <GlobalStyle/>
    <Header/>  
    <Body>
          
        { tweet ?       
        <>
        <Tweet
            id={tweet.id}
            key={tweet.id}
            image={tweet.image}
            accName={tweet.accName}
            atName={tweet.atName}
            text={tweet.text}
            likes={tweet.likes}
            comments={tweet.comments}
            shares={tweet.shares}
            liked={tweet.liked}
        />
        <AddComment
            refresher={refreshData}
        />
        {tweet.Comments.map(comment => {
            return <Tweet
                id={comment.id}
                tid={tweet.id}
                key={comment.id}
                image={comment.image}
                accName={comment.accName}
                atName={comment.atName}
                text={comment.text}
                likes={comment.likes}
                comments={comment.comments}
                shares={comment.shares}
                liked={comment.liked}
        />
        })}
        </>
        : <></>}
    </Body>
    </>
)}
