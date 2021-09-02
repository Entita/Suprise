import { useState } from 'react';
import styled from 'styled-components'

const ARTICLE = styled.article`
    display: flex;
`

const BookBtn = styled.button`
    text-decoration: none;
    background-color: white;
    margin-right: 1.5rem;
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
`

const BookSpan = styled.span`
    font-weight: 100;
`

function Book({ book }) {
    return (
        <ARTICLE>
            <BookBtn>
                <BookH2>{book.author}<BookSpan>{book.name}</BookSpan></BookH2>
            </BookBtn>
        </ARTICLE>
    )
}

export default Book
