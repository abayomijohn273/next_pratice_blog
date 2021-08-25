const About = ({data}) => {
    return (
        <div>
            <h1>Welcome</h1>
        </div>
    )
}

export const getStaticProps = async(context) => {
    const resp = await fetch('http://localhost:3000/api/hello');
    const data = await resp;

    console.log(data)

    return {
        // props: {
        //     data
        // }
    }
}

export default About
