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
        const a = nanoid()
        if (session) {
            axios.post("https://backend323423.herokuapp.com/tweets",{
            id: a,
            image: session.user.image,
            accName: session.user.name,
            atName: session.user.name,
            text: tweetData,
            likes: [],
            Comments: [],
            shares: 0,
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