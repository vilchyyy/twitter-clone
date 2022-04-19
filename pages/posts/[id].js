import { Body, GlobalStyle } from "../../styles/styles"
import Tweet from "../../components/Tweet"
import { useRouter } from 'next/router'
import AddComment from "../../components/AddComment"
import shrek from "../../public/shrek.jpg"
import Header from "../../components/Header"

export async function getServerSideProps(ctx) {
    const { id } = ctx.query
    const res = await fetch(`https://backend-342981244121234.herokuapp.com/tweets/${id}`)
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
    tweet = data
    return (
    <>
    <GlobalStyle/>
    <Header/>  
    <Body>
          
        { tweet ?       
        <>
        <Tweet
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
        <AddComment
            refresher={refreshData}
        />
        {tweet.Comments.map(comment => {
            return <Tweet
                id={comment._id}
                tid={tweet._id}
                key={comment._id}
                image={comment.Image}
                accName={comment.AccName}
                atName={comment.AtName}
                text={comment.Text}
                likes={comment.Likes}
                comments={comment.Comments}
                shares={comment.Shares}
        />
        })}
        </>
        : <></>}
    </Body>
    </>
)}
