import styled from 'styled-components'

const Section = styled.section`
    display: flex;
    flex-flow: column;
    min-height: 100vh;
    max-width: 100vw;
    background-color: white;
    justify-content: center;
    align-items: center;
`

const Text = styled.p`
    display: flex;
    margin-left: 17rem;
    margin-right: 17rem;
    text-align: center;
    line-height: 43px;
    color: var(--text--color--grey-color);
    font-family: var(--text--wght900-font-family);
    font-weight: 900;
    margin-bottom: 3.5rem;
    margin-top: 3rem;
`

const Underline = styled.div`
    border-top: 5px solid var(--text--color--grey-color);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom: 5px solid var(--text--color--grey-color);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    width: 40vw;
    margin-bottom: 3rem;
`

function InfoSection() {
    return (
        <Section>
            <Text>Jak už jsem říkal, každý mi něco dal a každý mě nějak ovlivnil, a proto jsem se rozhodl udělat si svou vlastní korespondenci myšlenek. Je zde pár autorů, kteří tu ale mají být a nejsou. Je to proto, protože zde mají speciální význam. Jsou to autoři, kteří si píši svůj vlatní život a semtam jim ujede ruka a nevratitelně vpíši něco i do mě. Můj bratr je jedním z nich naučil mě ledacos, ale mezi ostatními vyniká tím, že mě naučil bádat a neustále pochybovat v dobrém slova smyslu. Ten druhý autor je má přítelkyně, která ve mně probudila něhu a do krve mi vlila lásku. Myšlenky se ztrácí, mění se a podřizují, ale některých je škoda. Z těch tisíců a desetitisíců, které každý den náš mozek produkuje je pár, které stojí za to aby se k nim člověk vrátil, nebo nad nimi přemýšlel. Pokud si je člověk někam nezapíše, nebo je s někým nesdílí, tak zmízí a jejich přesná formulace v dané chvíli se ohne s časem a tvar, který měli na začátků už je pokřivený. Tady těch pár myšlenek už jsem za život měl spousty a mrzí mě, že některé už maji své místo v odpadlišti dějin, ale není důvod pokračovat v tomto zatracování. Některé myšlenky jsem měl při, nebo po čtení knížek, některé myšlenky v průběhu studijí, některé při hádkák, některé byli o mně samém a okolí, prostě různé druhy a typy. Ty, koho jsem si vybral máš právo semnou tyhle myšlenky sdílet a uvažovat nad nimi stejně jako já. Není to jen jakási varianta blogu, ale malá část skládačky mě samého. Chtěl jsem též mít pohromadě co nejvíc věci o mně. Myšlenky jsou jediné místo, kde jsme zatím opravdu svobodní. Rozhodl jsem se o část te svobody podělit se světem. Tady je. </Text>
            <Underline></Underline>
        </Section>
    )
}

export default InfoSection
