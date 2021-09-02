import { useState } from 'react';
import Post from './Post';
import styled from 'styled-components'

const Section = styled.section`
    height: 100vh;
    max-width: 100vw;
    background-color: white;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`

const PostModal = styled.div`
    height: 35rem;
    width: 60vw;
    overflow: scroll;
    overflow-x: hidden;
    margin-bottom: 5rem;
    box-shadow: 10px 10px 35px rgb(158 158 158);
    border-radius: 10px;
    z-index: 10;
`

const AddBtn = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 30px;
    color: var(--text--color--orange-color);
    cursor: pointer;
`

const AddBtnP = styled.p`
    font-family: var(--text--wght900-font-family);
    font-weight: 900;
    font-size: 10px;
    padding-top: 1.3rem;
`

const ToTop = styled.a`
    border-radius: 30px;
    box-shadow: 10px 10px 35px rgb(216 216 216);
    text-decoration: none;
    margin-bottom: 1.5rem;
    
    &:hover {
        box-shadow: 2px 2px 5px rgb(216 216 216);
        transition: .3s;
    }
`

const ToTopSpan = styled.span`
    font-family: var(--text--wght900-font-family);
    font-weight: 900;
    color: var(--text--color--orange-color);
    display: block;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 3.5rem;
    margin-right: 3.5rem;
`

const Form = styled.div`
    display: flex;
    flex-flow: column;
`

const Input = styled.input`
    display: flex;
    width: 60vw;
    margin-bottom: 1rem;
    height: 5rem;
    background: rgba(196, 196, 196, 0.69);
    border-radius: 10px;
    color: white;
    font-family: var(--text--wght900-font-family);
    font-weight: 900;
    font-size: 20px;
`

const SendButton = styled.button`
    display: flex;
    width: 60vw;
    height: 5rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
    background: rgba(196, 196, 196, 0.69);
    border-radius: 10px;
    color: var(--text--color--orange-color);
    font-size: 20px;

    &:hover {
        background:rgba(216, 216, 216, 0.555);
        color: white;
        transition: .5s;
        cursor: pointer;
    }
`

function PostsSection({ posts }) {
    const [openForm, setOpenForm] = useState(false)
    const [currPosts, setCurrPosts] = useState(posts)

    function newPost() {
        setCurrPosts(currPosts => [...currPosts, {
            text: 'můj první post',
            place: 'Olomouc',
            date: '2021-7-20'
        }])
    }

    function toggleForm() {
        setOpenForm(openForm => !openForm)
    }

    return (
        <Section>
            {openForm && (<Form>
                <Input type="date" />
                <Input type="text" placeholder="post message" />
                <Input type="text" placeholder="place where posted" />
                <SendButton onClick={newPost}><i className="fas fa-paper-plane"></i></SendButton>
            </Form>)}
            <PostModal>
                <AddBtn onClick={toggleForm}>
                    <AddBtnP>add</AddBtnP>
                    <i className="fas fa-plus"></i>
                </AddBtn>
                {currPosts.map((post, index) => {
                    return <Post post={post} key={index} />
                })}
            </PostModal>
            <ToTop href="#">
                <ToTopSpan>zpět na začátek</ToTopSpan>
            </ToTop>
        </Section>
    )
}

export default PostsSection
