import { useEffect } from 'react';
import Header from "./Header";
import AuthorsHeader from "./AuthorsHeader"
import AuthorsSection from "./AuthorsSection"
import PersonalitiesHeader from "./PersonalitiesHeader"
import PersonalitiesSection from "./PersonalitiesSection"

function PeoplePage({ authors, people }) {
    useEffect(() => {
        const hash = window.decodeURIComponent(window.location.hash)
        document.querySelector(hash).scrollIntoView()
    })

    return (
        <>
            <Header />
            <AuthorsHeader />
            <AuthorsSection authors={authors} />
            <PersonalitiesHeader />
            <PersonalitiesSection people={people} />
        </>
    )
}

export default PeoplePage