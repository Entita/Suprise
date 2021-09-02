import { Route, BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components'
import IndexPage from './IndexPage';
import BooksPage from './BooksPage';
import PeoplePage from './PeoplePage';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    outline: none;
    scroll-behavior: smooth;
  }
  :root {
    --text--wght900-font-family: 'Roboto', sans-serif;
    --text--wght100-font-family: 'Roboto', sans-serif;
    --text--color--black-color: black;
    --text--color--white-color: rgba(211, 210, 210, 1);
    --text--color--grey-color: rgba(65, 65, 65, 0.72);
    --text--color--light__grey-color: rgba(130, 130, 130, 0.83);
    --text--color--darker__grey-color: rgba(65, 65, 65, 0.75);
    --text--color--orange-color: rgba(255, 138, 0, 1);
    --text--color--light_orange-color: rgba(255, 168, 105, 1);
    --text--color--lighter_orange-color: rgba(255, 203, 142, 1);
    --color--light_orange-color: rgba(255, 173, 78, 1);
    --profile--photo-color: rgba(255, 186, 105, 1);
  }
  ::-webkit-scrollbar {
    width: 15px;
    margin-left: 1.5rem;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(196, 196, 196, 0.69);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(196, 196, 196, 0.2);
    border-radius: 10px;
  }
  input {
    padding-left: 1.5rem;
  }
  ::placeholder {
    color: rgba(255, 255, 255, 0.575);
    font-weight: 100;
    width: 5vw;
    height: 5rem;
    padding-right: 10rem;
  }
`

const posts = [{
  text: 'můj první post',
  place: 'Olomouc',
  date: '2021-7-20'
}, {
  text: 'je možné aby nám někdo ukradl svobodu myšlení?',
  place: 'Velký Týnec',
  date: '2021-7-21'
}, {
  text: 'chaos v mořských řasách a akciových grafech',
  place: 'Olomouc',
  date: '2021-7-30'
}, {
  text: 'BLA BLA BLA',
  place: 'MICHAL JE VOCAS',
  date: '2021-7-21'
}],
  books = [{

  }],
  authors = [],
  people = []

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Route exact path="/" render={() => <IndexPage posts={posts} />} ></Route>
      <Route exact path="/books" render={() => <BooksPage books={books} />} ></Route>
      <Route exact path="/people" render={() => <PeoplePage authors={authors} people={people} />} ></Route>
    </Router>
  )
}

export default App