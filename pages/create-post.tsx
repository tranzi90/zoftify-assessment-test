import { NextPage } from "next"
import Container from "../components/Container"
import Header from "../components/Header"
import PostForm from "../components/PostForm"

const CreatePost: NextPage = () => {
    return (
        <>
            <Header title="New Post" backButton={true} link="/" />
            <Container>
                <div className="px-6">
                    <p className="text-base mb-[18px]">
                        Post information
                    </p>
                    <PostForm />
                </div>
            </Container>
        </>
    )
}

export default CreatePost
