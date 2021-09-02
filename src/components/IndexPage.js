import MeSection from './MeSection';
import InfoSection from './InfoSection';
import PostsSection from './PostsSection';

function IndexPage({ posts }) {
    return (
        <>
            <MeSection />
            <InfoSection />
            <PostsSection posts={posts} />
        </>
    )
}

export default IndexPage