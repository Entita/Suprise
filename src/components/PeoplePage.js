import Header from "./Header";
import AuthorsHeader from "./AuthorsHeader"
import AuthorsSection from "./AuthorsSection"
import PersonalitiesHeader from "./PersonalitiesHeader"
import PersonalitiesSection from "./PersonalitiesSection"

function PeoplePage({ authors, people }) {
    return (
        <>
            <Header id="authors" />
            <AuthorsHeader />
            <AuthorsSection authors={authors} />
            <PersonalitiesHeader />
            <PersonalitiesSection people={people} />
        </>
    )
}

export default PeoplePage