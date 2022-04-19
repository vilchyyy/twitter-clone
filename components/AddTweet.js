import { nanoid } from "nanoid"
import arrow from "../public/icons/send-plane-2-fill.svg"
import { NewTweetBody, NewTweet, SendIcon } from "../styles/styles"
import Image from "next/image"
import {useState } from "react"
import axios from "axios"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

export default function AddTweet(props) {
    const router = useRouter()
    const [focused, setFocused] = useState(false)
    const [tweetData, setTweetData] = useState("")
    const handleChange = (e) => {
        setTweetData(e.target.value)
    }
    const { data: session, status } = useSession()
    const loading = status === "loading"
    const handleClick = () => { 
        if (session) {
            axios.post("https://backend-342981244121234.herokuapp.com/tweets",{
            Image: session.user.image,
            AccName: session.user.name,
            AtName: session.user.name,
            Text: tweetData,
            Likes: [],
            Comments: [],
            Shares: 0,
        }).then(()=> props.refresher())
        setTweetData("")
        } else {
            router.push("/api/auth/signin")
        }
        
    } 

    return (
        <>
        <NewTweetBody onBlur={() => setFocused(prev => !prev)}
        onFocus={() => setFocused(prev => !prev)}>
            <NewTweet value={tweetData} onChange={handleChange} placeholder="What are you thinking about?"/>
            <SendIcon onMouseDown={handleClick}>
                {focused ? <Image  src={arrow}/> : <></>}                
            </SendIcon>
        </NewTweetBody>
        </>

    )
}