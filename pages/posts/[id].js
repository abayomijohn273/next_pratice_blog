import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Layout from "../../components/layout"
import Alert from "../../components/alert/alert"
import { getAllPostIds } from "../../lib/posts"

const Post = ({ post }) => {
    const router = useRouter();
    return (
        <Layout>
            <Head>
                <title>Post {router.query.id}</title>
            </Head>

            <Alert type="success">
                Congratulation! It worked
            </Alert>
        </Layout>


    )
}

export const getStaticProps = async (context) => {
    return {
        props: {
            post: "Hello"
        }
    }
}

export const getStaticPaths = async () => {
    const paths = getAllPostIds()

    return {
        paths,
        fallback: false
    }
}

export default Post

