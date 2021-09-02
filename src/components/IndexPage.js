import MeSection from './MeSection';
import InfoSection from './InfoSection';
import PostsSection from './PostsSection';

function indexPage({ posts }) {
    return (
        <>
            <MeSection />
            <InfoSection />
            <PostsSection posts={posts} />
        </>
    )
}

export default indexPage