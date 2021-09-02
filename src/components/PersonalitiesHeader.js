import styled from 'styled-components'

const Section = styled.section`
    background-color: white;
    min-height: 100vh;
    max-width: 100vw;
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

const RightRect = styled.div`
    position: absolute;
    background-color: rgba(255, 138, 0, 0.27);
    width: 35vw;
    height: 200vh;
    top: 110rem;
    right: 0;
    z-index: 1;
`

function PersonalitiesHeader() {
    return (
        <>
        <Section>
            <Content>
                <ContentH2>Osobnosti jež mě formovaly</ContentH2>
                <ContentP>Když jsme ve 3. ročníku na střední škole s našim třídním učitelem Milanem Baránkem poprvé v hodinách fyziky mluvili o lomu světla disperzi a barevném spektru, tak mi v hlavě utkvěl obrazek barevného spktra -> hlavně jeho rozmanitost. Vybavil jsem si ho hned, jakmile jsem začal dávat dohromady osobnosti, které mě ovlivnili. Dokud to člověk nemá před sebou, tak nevidí jak i on sám je nakonec rozmanitý a jeho vědomosti jsou rozšířené do celé řady oblastí. Od historie přes pšenici (biologii), až po mikroprocesory v utrobách počitačové sestavy.</ContentP>
            </Content>
        </Section>
        <RightRect />
        </>
    )
}

export default PersonalitiesHeader