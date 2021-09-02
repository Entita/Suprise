import styled from 'styled-components'

const ARTICLE = styled.article`
    margin-bottom: 3rem;
    padding-left: 2rem;
`

const Text = styled.p`
    font-size: 36px;
    font-family: var(--text--wght100-font-family);
    font-weight: 100;
    margin-right: 1.5rem;
`

const Name = styled.h2`
    font-size: 64px;
    font-family: var(--text--wght900-font-family);
    font-weight: 900;
`

const Place = styled.span`
        color: var(--text--color--orange-color);
    font-weight: 100;
    margin-left: 1rem;
`

function Post({ post }) {
    return (
        <ARTICLE>
            <Name>
                {post.date}
                <Place>{post.place}</Place>
            </Name>
            <Text>{post.text}</Text>
        </ARTICLE>
    )
}

export default Post
