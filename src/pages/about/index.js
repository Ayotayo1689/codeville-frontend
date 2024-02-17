import LandingLayout from "../../layouts/landing.layout";

import AboutUS from "../../components/aboutUs";
import axiosInstance from "../../utils/config";
//hello
import Head from "next/head";

const About = ({serviceMap, stacks, aboutUsVideo, categories}) => {
    return (
        <>
            <Head>
                <title>About Us - Tanta Innovative Limited</title>
                <meta
                    name="description"
                    content="Unleash your potential with Tanta Innovative. Our innovative IT solutions and
                     personalized approach set your business apart. Propel your success with our expertise.
                     Contact us for a standout website."
                />
            </Head>
            <AboutUS
                serviceMap={serviceMap}
                stacks={stacks}
                aboutUsVideo={aboutUsVideo}
                categories={categories}
            />
        </>
    );
};
About.getLayout = function getLayout(page) {
    return <LandingLayout>{page}</LandingLayout>;
};
export default About;

export async function getStaticProps() {
    // Fetch data from an API or a database
    let serviceMap = [];
    let stacks = [];
    let aboutUsVideo = {};
    let categories = [];
    try {
        const response = await axiosInstance("/api/aboutuspage/service-map/");
        serviceMap = response.data;
        const stacksResponse = await axiosInstance("/api/aboutuspage/stacks/");
        stacks = stacksResponse.data;
        const aboutUsVideoResponse = await axiosInstance("/api/aboutuspage/video/");
        aboutUsVideo = aboutUsVideoResponse.data;
        const solutionResponse = await axiosInstance("/api/solutioncategories/");
        categories = solutionResponse.data;
    } catch (error) {
    }

    // Return the fetched data as props
    return {
        props: {
            serviceMap,
            stacks,
            aboutUsVideo,
            categories,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        // revalidate: 10,  In seconds
    };
}
