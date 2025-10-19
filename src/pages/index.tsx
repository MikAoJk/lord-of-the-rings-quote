import Head from 'next/head'
import {NextPage} from "next";
import QuoteGenerator from "@/components/QuoteGenerator/QuoteGenerator";


const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>LOTR Quote</title>
                <meta name="description" content="LOTR Quote app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <QuoteGenerator/>
            </main>
        </div>
    )
}
export default Home
