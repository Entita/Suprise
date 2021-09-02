import { useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
    z-index: 100;
    min-height: 100vh;
    max-width: 100vw;
`

const Modal = styled.div`
    background-color: white;
    height: 35rem;
    width: 60rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    border-radius: 50px;
    box-shadow: 10px 10px 35px rgb(158 158 158);
    z-index: 100;
`

const Heading = styled.h2`
    font-size: 36px;
    color: #FF8A00;
    font-family: var(--text--wght100-font-family);
    font-weight: 100;
    text-transform: lowercase;
`

const Content = styled.div`
    flex-direction: column;
    margin-top: 1.5rem;
    display: flex;
    align-items: flex-start;
    overflow-y: scroll;
    padding-right: 3rem;
    height: 25rem;
    width: 30rem;
    font-size: 36px;
`

const AddBtn = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 1.5rem;
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

const Author = styled.span`
    margin-top: 1.5rem;
    font-family: var(--text--wght100-font-family);
    font-weight: 100;
`

function AuthorsSection({ authors }) {
    const [currAuthors, setCurrAuthors] = useState(authors)

    function addAuthor() {
        setCurrAuthors(currAuthors => [...currAuthors, 'Matt Wallker'])
    }

    return (
        <Container>
            <Modal>
                <Heading>Autoři</Heading>
                <Content>
                    <AddBtn onClick={addAuthor} >
                        <AddBtnP>add</AddBtnP>
                        <i className="fas fa-plus" />
                    </AddBtn>
                    {currAuthors.map((author, index) => {
                        return <Author key={index} >{author}</Author>
                    })}
                </Content>
            </Modal>
        </Container>
    )
}

export default AuthorsSection