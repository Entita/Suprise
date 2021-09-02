import { useState } from 'react';
import Header from "./Header";
import Book from "./Book";
import styled from 'styled-components'
import meImageOnBooks from '../images/me-at-th-top-of-the-books.svg'

const Main = styled.div`
    display: flex;
    flex-flow: row;
    min-height: 100vh;
    max-width: 100vw;
`

const Decor = styled.div`
    display: flex;
    height: 91.5vh;
    width: 50vw;
`

const FirstRec = styled.div`
    display: flex;
    background-color: rgba(218, 218, 218, 0.35);
    height: 80vh;
    width: 38vw;
    position: absolute;
    left: 5rem;
    z-index: 1;
`

const SecondRec = styled.div`
    display: flex;
    background-color: rgba(255, 223, 185, 1);
    height: 50vh;
    width: 42vw;
    position: absolute;
    left: 25rem;
    top: 17rem;
    z-index: 10;
`

const Section = styled.div`
    display: flex;
    height: 91.5vh;
    width: 50vw;
    flex-flow: column;
`

const Title = styled.div`
    height: 15vh;
    max-width: 50vw;
    display: flex;
    align-items: flex-end;
`

const H1 = styled.h1`
    text-transform: uppercase;
    font-family: var(--text--wght900-font-family);
    font-weight: 900;
    font-size: 60px;
    z-index: 10;
`

const TitleSpan = styled.span`
    color: var(--text--color--lighter_orange-color);
    font-weight: 100;
`

const BookContent = styled.div`
    height: 75vh;
    max-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

const BookImageContainer1 = styled.div`
    z-index: 100;
    position: absolute;
    top: 10rem;
    left: 10rem;
    height: 50rem;
    width: auto;
`

const BookModal = styled.div`
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    border-radius: 10px;
    height: 30rem;
    width: 35rem;
    z-index: 100;
    overflow: scroll;
    overflow-x: hidden;
    box-shadow: 10px 10px 35px rgb(158 158 158);
    gap: 1.5rem;
`

const AddBook = styled.div`
    cursor: pointer;
    margin-top: 1.5rem;
    display: flex;
    margin-left: 4.5rem;
    font-size: 30px;
    color: var(--text--color--orange-color);
`

const AddBookP = styled.p`
    font-family: var(--text--wght900-font-family);
    font-weight: 900;
    font-size: 10px;
    padding-top: 1.3rem;
`

function BooksPage({ books }) {
    const [currBooks, setCurrBooks] = useState(books)

    function addBook() {
        setCurrBooks(currBooks => [...currBooks, {
            author: 'Andy Weir',
            name: 'Marťan',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quibusdam quasi veniam dolor? Excepturi provident animi nesciunt quae. Velit incidunt sapiente quod, dolore obcaecati eaque quos doloribus. Doloribus eveniet animi, amet iste libero accusantium perferendis architecto excepturi sed maiores facilis in! Sed modi odit impedit a expedita iste maxime magni sapiente qui. Laborum tempore blanditiis culpa, officia enim veritatis facere voluptatum. Ipsam similique nemo alias quod minima quis, amet, deleniti accusantium in voluptatem sapiente tenetur numquam beatae assumenda expedita iusto.'
        }])
    }

    return (
        <>
            <Header />
            <Main>
                <Decor>
                    <FirstRec />
                    <SecondRec />
                    <BookImageContainer1>
                        <img src={meImageOnBooks} alt="Me on books" />
                    </BookImageContainer1>
                </Decor>
                <Section>
                    <Title>
                        <H1>Knížky,<TitleSpan> které jsem přečetl</TitleSpan></H1>
                    </Title>
                    <BookContent>
                        <BookModal>
                            <AddBook onClick={addBook}><AddBookP>add</AddBookP><i className="fas fa-plus"></i></AddBook>
                            {currBooks.map((book, index) => {
                                return <Book book={book} key={index} />
                            })}
                        </BookModal>
                    </BookContent>
                </Section>
            </Main>
        </>
    )
}

export default BooksPage