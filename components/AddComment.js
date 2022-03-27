import { nanoid } from "nanoid"
import arrow from "../public/icons/send-plane-2-fill.svg"
import { NewTweetBody, NewTweet, SendIcon } from "../styles/styles"
import Image from "next/image"
import {  useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import { useSession } from "next-auth/react"

export default function AddComment(props) {
    const router = useRouter()
    const { id } = router.query
    const [focused, setFocused] = useState(false)
    const [commentData, setCommentData] = useState("")
    const handleChange = (e) => {
        setCommentData(e.target.value)
    }
    const { data: session, status } = useSession()
    const loading = status === "loading"
    const handleClick = () => { 
        const a = nanoid()
        if (session) {
            axios.put("https://backend323423.herokuapp.com/tweets",{
                tid: id,
                id: a,
                image: session.user.image,
                accName: session.user.name,
                atName: session.user.name,
                text: commentData,
                likes: [],
            }).then(()=>props.refresher())
            setCommentData("")
        } else {
            router.push("/api/auth/signin")
        }
    }

    return (
        <>
        <NewTweetBody onBlur={() => setFocused(prev => !prev) }
        onFocus={() => setFocused(prev => !prev)}>
            <NewTweet value={commentData} onChange={handleChange} placeholder="Write a comment..."/>
            <SendIcon onMouseDown={handleClick}>
                {focused ? <Image src={arrow}/> : <></>}                
            </SendIcon>
        </NewTweetBody>
        </>
    )
}