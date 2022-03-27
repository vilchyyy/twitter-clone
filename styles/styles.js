import styled, { css } from "styled-components"
import { createGlobalStyle } from "styled-components"
import Image from "next/image"

export const Body = styled.div`
    background-color: #111111;
    width: 90%;
    margin: auto;
    max-width: 1000px;
`

export const TweetBody = styled.div`
    border: 1px solid #333;
    border-radius: 1em;
    padding: 1em;
    display: grid;
    margin-top: 1em;
    
`

export const TweetTop = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1.5em;
` 

export const ProfIcon= styled(Image)`
    border-radius: 1em;
    border: 2px solid #555555;
`

export const Names = styled.div`
    margin-top: 5px;
`

export const AccName = styled.p`
    letter-spacing: 0.7px;
    margin: 0;
    font-weight: bold;
    font-size: 1.02rem;
`
export const AtName = styled.small`
    opacity: 0.5;
`
export const TweetMiddle = styled.p`
    line-height: 1.5;
    letter-spacing: 0.6px;
    margin-bottom: 0;
`
export const TweetFooter = styled.div`
    text-align: right;
    display: flex;
    justify-content: flex-end;
    gap: 1em;
    margin-top: 0;
`
export const TweetFooterItem = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`

export const TweetIcon = styled(Image)`
    margin-left: 2em;
`


export const NewTweet = styled.textarea`
    border: none;
    background: #00000000;
    color: #fff;
    font-family: sans-serif;
    letter-spacing: 0.6px;
    line-height: 1.3;
    width: calc(100% - 2em);
    margin-top: 1em;
    border: 1px solid #333;
    border-radius: 0.7em;
    font-size: 1.3rem;
    padding: 1em;
    transition: 0.6s;
    height: 1.3em;
    resize: none;
    &:focus {
        height: 10em;
    }
`
export const NewTweetBody = styled.div`
    display: flex;
    position: relative;
`

export const SendIcon = styled.div`
    position: absolute;
    bottom: 15px;
    right: 15px;
`
export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0 2em;
    align-items: center;
    border-bottom: 1px solid #666;
`
export const Logo = styled.p`
    text-decoration: none;
    color: #fff;
    font-size: 2em;
    cursor: pointer;
`

export const NavLink = styled.a`
    text-decoration: none;
    color: #fff;
`
export const NavCenter = styled.div`
    display: flex;
`

export const GlobalStyle = createGlobalStyle`
    body, html {
        margin: 0;
        padding: 0;
    }
    html {
        font-family: sans-serif;
    }
    body {
        box-sizing: border-box;
        background-color: #111;
        color: #eee
    }
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: #555;
        border-radius: 2em;
    }

`