import { useState } from 'react';
import styled from 'styled-components'

const ARTICLE = styled.article`
    display: flex;
`

const BookH2 = styled.h2`
    font-family: var(--text--wght900-font-family);
    font-weight: 900;
    margin-left: 4.5rem;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    text-align: left;
    border-radius: 4px;
    cursor: pointer;
`

const BookBtn = styled.button`
    text-decoration: none;
    background-color: white;
    margin-right: 1.5rem;
    display: flex;

    &:hover ${BookH2} {
        transition: .6s;
        background-color: rgba(0,0,0,.05);
    }
`

const BookSpan = styled.span`
    font-weight: 100;
`

const Overlay = styled.div`
    opacity: 1;
    pointer-events: all;
    z-index: 100;
    position: fixed;
    transition: 200ms ease-in-out;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
`

const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    transition: 200ms ease-in-out;
    box-shadow: 10px 10px 35px rgb(204 204 204);
    border-radius: 10px;
    z-index: 1000;
    background-color: white;
    width: 800px;
    max-width: 80%;
`

const ModalHeader = styled.div`
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ModalTitle = styled.div`
    font-size: 1.25rem;
    font-weight: bold;
    font-family: var(--text--wght900-font-family);
    font-weight: 900;
    font-size: 3.5vh;
`

const ModalTitleName = styled.span`
    font-weight: 100;
    color: #FF8A00;
`

const ModalBtn = styled.button`
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-size: 1.25rem;
    font-weight: bold;
`

const ModalBody = styled.div`
    padding: 10px 15px;
`

const ModalBodyText = styled.p`
    font-family: var(--text--wght100-font-family);
    font-weight: 100;
    font-size: 2.5vh;
    margin-bottom: 1.5rem;
`

function Book({ book }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <ARTICLE>
                <BookBtn onClick={() => setShowModal(showModal => !showModal)}>
                    <BookH2>{book.author}<BookSpan>{book.name}</BookSpan></BookH2>
                </BookBtn>
            </ARTICLE>
            {showModal && (<><Modal>
                <ModalHeader>
                    <ModalTitle>{book.author} - <ModalTitleName>{book.name}</ModalTitleName></ModalTitle>
                    <ModalBtn onClick={() => setShowModal(showModal => !showModal)}><i className="fas fa-times"></i></ModalBtn>
                </ModalHeader>
                <ModalBody>
                    <ModalBodyText>{book.text}</ModalBodyText>
                </ModalBody>
            </Modal>
                <Overlay />
            </>
            )}
        </>
    )
}

export default Book
