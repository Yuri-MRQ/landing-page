import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Links = styled(Link)`
    text-align: right;
    padding: 1rem 1rem;
    color: #000;
    font-size: 1.5em;
    margin: auto;
    text-decoration: none;
    font-weight: bold;

    &:hover {
        color: #92a8d1;
    }
`
export const companyNameTop = styled.h3`
    margin-block: auto;
    margin-inline: auto;
    margin: 0px 0px 0px 11vw;
    display: inline;
    font-size: 2em;
`
export const linksTopNav = styled.div`
    margin: 0 11vw .2vw auto;
    width: auto;
    flex-direction: row;
    justify-content: center;

`

export const contente = styled.div `
    align-items: center;
    display: flex;
    flex-direction: column;
`

export const topNavagation = styled.div `
    position: fixed;
    flex-direction: row;
    flex-flow: row;
    top: 0;
    width: 100%;
    height: 7vh;
    align-content: center;
    flex-wrap: wrap;
    align-items: center;
    display: inline-flex;
    background-color: #fff;
    border-bottom-color: black;
    border-bottom-width: .5px;
    border-bottom-style: groove;
    overflow: hidden;
`

export const description = styled.div `
    margin-top: auto;
    border: 2px solid #fff;
    width: 80%;
    height: auto;
    flex-direction: row;
    flex-flow: row;
    display: flex;
    background-color: #f5f5f5;
    
`

export const img1 = styled.img `
    display: block;
    width: 100%;
    height: auto;
    
`


export const pText = styled.p `
    width: auto;
    height: 100%;
    margin: auto;
    text-align: justify;
    margin: 0 1vw;
    font-size: 1em;
    font-family: 'Times New Roman', Times, serif;
    text-indent: 60px;
    
`

export const image = styled.div `
    border: 2px solid #fff;
    width: auto;
    height: 100%;
    display: flex;
    overflow: hidden;
    flex-direction: column;

    &:hover{
        opacity: 0.3;
    }
    
`
export const imageContent = styled.div `
    border: 2px solid #fff;
    width: auto;
    height: 100%;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    
`
export const benefits = styled.div `
    border: 2px solid #fff;
    width: 80%;
    height: auto;
    background-color: #f5f5f5;
    display: flex;
    
`
export const reinforcement = styled.div `
    border: 2px solid #fff;
    width: 80%;
    height: auto;
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
    overflow: hidden;
    
`

export const callAction = styled.div `
    border: 2px solid #fff;
    width: 80%;
    height: auto;
    align-items: center;
    align-content: center;
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    font-family: 'Times New Roman', Times, serif;
    
`
export const footer = styled.div `
    border-top-color: black;
    border-top-width: .5px;
    border-top-style: groove;
    width: 100%;
    height: 5vh;
    align-items: center;
    align-content: center;
    display: flex;
    background-color: #fff;
    
`
export const productImage = styled.img`


`
export const ulProduct = styled.ul`
    list-style: none;
    align-items: center;
    align-content: center;
    display: flex;
    flex-direction: column;
    padding-inline-start: 0;
`
export const liDiv = styled.div`

`


export const liProduct = styled.li`
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 3px;
    background:#bdbdd5;
    cursor: pointer;

    &:hover{
        background-color: #000;
    }
`

export const text = styled.div`
    margin: auto;
    align-items: center;
`

export const image2 = styled.div`
    border: 2px solid #fff;
    width: auto;
    height: 100%;
    display: flex;
`
export const image3 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const blackImage = styled.img`
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;

`
export const hoverText = styled.p`
    line-height: 40px;
    font-weight: bold;
    font-family: "Trebuchet MS";
    text-align: center;
    position: absolute;
    display: block

`
export const inputEmail = styled.input`
    border: 1px solid #000;
    height: 1.5rem;
    padding: 0 .5rem; 
    border-radius: .25rem 0 0 .25rem;
    margin-top: .6vh;
    width: 28.5vw;
    
    
    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`

export const submitButton = styled.button`
    height: 1.5rem;
    border: 1px solid #fff;
    background: #000;
    color: #fff;
    border-radius: 1px;
    margin-top: 2vh;
    font-family: 'Times New Roman', Times, serif;
    font-size: large;
    margin: 1vh 0 1vh;
    width: auto;
    float: right;

    &:focus,
    &:hover{
        background: #fff;
        color: #000;
        border: 1px solid #000;
    }
    &:active {
        outline: none;
        box-shadow: none;
    }
`
export const textFooter = styled.p`
    margin: .5vh 0px 0px 11vw;
    text-align: justify;
    display: flex;
    font-size: .9rem;
`

export const Textsign = styled.p`
    margin: auto;
    text-align: justify;
    display: flex;
    font-size: larger;
    padding: 0 0 4vh 0;
`
export const Textsign2 = styled.p`
    margin: auto;
    text-align: justify;
    display: flex;
    font-size: larger;
    padding: 8vh 0 0 0;
`
export const figCaption = styled.figcaption`
    background-color: #222;
    color: #fff;
    font: italic smaller sans-serif;
    padding: 3px;
    text-align: center;
    font-size: larger;
`

export const linksBotNav = styled.div`
    margin: 3vh 11vw .2vw auto;
    width: auto;
    flex-direction: row;
    justify-content: center;

`

export const LinksBotton = styled(Link)`
    text-align: right;
    padding: 1rem 0rem 0rem 1rem;
    color: #000;
    font-size: 1.5em;
    margin: auto;
    text-decoration: none;
    font-weight: bold;

    &:hover {
        color: #92a8d1;
    }
`

export const container = styled.div`
    height: auto;
    width: auto;
    align-items: center;
    align-content: center;
    padding: 0 0 8vh 0;
`