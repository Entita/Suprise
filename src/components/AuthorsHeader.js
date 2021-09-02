import styled from 'styled-components'

const Section = styled.section`
    background-color: white;
    min-height: 100vh;
    max-width: 100vw;
`

const LeftRect = styled.div`
    width: 25vw;
    height: 80vh;
    display: flex;
    align-items: flex-end;
    flex-flow: column;
    position: absolute;
    top: 10rem;
`

const Orange = styled.div`
    background-color: rgba(255, 138, 0, 0.59);
    width: 16vw;
    height: 100vh;
`

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
`

const ContentH2 = styled.h2`
    font-family: var(--text--wght900-font-family);
    font-weight: 900;
    font-size: 96px;
    margin-top: 10rem;
    margin-bottom: 1.5rem;
`

const ContentP = styled.p`
    text-align: center;
    margin-left: 20rem;
    margin-right: 20rem;
    font-size: 36px;
    margin-top: 1.5rem;
    font-family: var(--text--wght100-font-family);
    font-weight: 100;
`

const Emoji = styled.i`
    height: 1.5em;
    width: 1.5em;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    vertical-align: middle;
    background-image: url('https://twemoji.maxcdn.com/2/72x72/1f61c.png');
`

function AuthorsHeader() {
    return (
        <Section id="author">
            <Content>
                <ContentH2>Ovlivněn těmito autory</ContentH2>
                <ContentP>Zní to jak nápis na hrob, ale zatím mě nenapadl lepší nadpis (možná to časem změním). Jsou tu dvě kategorie jedna se věnuje autorům z knížek, kteří mě ovlivnili a druhá osobnostem. Je mezi nimi tenká hranice a pravdou je, že se prolínají. Autoří knížek jsou též osobnosti a většina osobnosti se do mého povědomí dostala skrz knížky. Důležité podotknout, že tu jsou jen vybraní autoři a ne všichni autoři, jak tomu bylo u knížek, které jsem přečetl. Výhodou stránek určených pro mě je ten, že logiku musejí dávat mně. A já ji zde vidím. <Emoji /></ContentP>
            </Content>
            <LeftRect>
                <Orange />
            </LeftRect>
        </Section>
    )
}

export default AuthorsHeader