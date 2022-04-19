import { AccName, AtName, Names, ProfIcon, TweetBody, TweetFooter, TweetFooterItem, TweetIcon, TweetMiddle, TweetTop } from "../styles/styles";
import heartLine from "../public/icons/heart-line.svg"
import heartFill from "../public/icons/heart-fill.svg"
import shareLine from "../public/icons/share-forward-line.svg"
import commentLine from "../public/icons/chat-1-line.svg"
import { useRouter } from 'next/router'
import axios from "axios";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function Tweet(props){
    const { data: session, status } = useSession()
    const router = useRouter()
    const [likes, setLikes] = useState(props.likes)
    const handleClick = (e) => {
        if (session) {
            if (props.tid) {
                axios.put(`https://backend-342981244121234.herokuapp.com/tweets/${props.tid}/${props.id}`, {
                    AccName: session.user.name
                }).then(res => {
                    console.log(res)
                    setLikes(res.data.Likes)
                })
                e.stopPropagation()
            } else {
                axios.put(`https://backend-342981244121234.herokuapp.com/tweets/${props.id}`, {
                    AccName: session.user.name
                })
            .then(res => {
                console.log(res)
                setLikes(res.data.Likes)
            })
                e.stopPropagation()
            }   
        }
    }
    return (
        <TweetBody onClick={!props.tid ? () => router.push(`/posts/${props.id}`): ()=>{}} >
            <TweetTop>
                <ProfIcon height={50} width={50} src={props.image}/>
                <Names>
                    <AccName>{props.accName}</AccName>
                    <AtName>{props.atName}</AtName>
                </Names>
            </TweetTop>
            <TweetMiddle>
                {props.text}
            </TweetMiddle>
            <TweetFooter>
                <TweetFooterItem onClick={handleClick}>
                    {likes.length}
                    {session ? <TweetIcon src={likes.includes(session.user.name) ? heartFill : heartLine}/>:
                    <TweetIcon src={heartLine}/>}
                    
                </TweetFooterItem>
                {props.comments ? <TweetFooterItem>
                    {props.comments.length}
                    <TweetIcon src={commentLine}/>
                </TweetFooterItem> : <></>}
                <TweetFooterItem>
                    {props.shares}
                    <TweetIcon src={shareLine}/>
                </TweetFooterItem>

                
            </TweetFooter>
        </TweetBody>
    )
}