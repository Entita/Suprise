import Header from './Header';
import MeModal from './MeModal';
import styled from 'styled-components'

const Page = styled.div`
    background-image: linear-gradient(to bottom, rgba(59, 59, 59, 0), rgba(104, 104, 104, 0), rgba(104, 104, 104, 0), white), url('http://cryptexted.wz.cz/img/two_orange_trees.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    max-width: 100vw;
    display: flex;
    position: relative;
    flex-flow: column;
    align-items: center;
`

function MeSection() {
    return (
        <Page>
            <Header />
            <MeModal />
        </Page>
    )
}

export default MeSection