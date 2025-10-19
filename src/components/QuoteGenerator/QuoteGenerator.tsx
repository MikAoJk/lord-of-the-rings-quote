import styles from "./QuoteGenerator.module.css";

import {useEffect, useState} from "react";
import {Quote} from "@/pages/api/quotes";

const QUOTES_URL = `/api/quotes`;
const QuoteGenerator = () => {

    const [quotes, setQuotes] = useState([]);
    const [quoteData, setQuoteData] = useState<Quote>();

    useEffect(() => {
        fetchData()
            .then((json) => {
                setQuotes(json);
                setQuoteData(
                    {
                        text: json[0].text,
                        author: json[0].author
                    }
                )
            });
    }, []);


    function getRandomQuote(quotes: any[]) {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    function getNewQuote() {
        setQuoteData(getRandomQuote(quotes));
    }


    return (
        <div className={styles.main}>
            <div className={styles.h1}> <h1>LOTR Quote</h1>
            </div>
            {(quoteData?.text) &&
                <section>
                    <h3>
                        <span>“</span>
                        {quoteData?.text}
                        <span>“</span>
                    </h3>
                    <i>- {quoteData?.author}</i>
                    <div className={styles.button}>
                        <button onClick={getNewQuote}>New Quote</button>
                    </div>
                </section>

            }
        </div>
    )
}

async function fetchData(): Promise<any> {

        const response = await fetch(QUOTES_URL, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`Http status code is ${response.status}`);
        }

        return await response.json();
}

export default QuoteGenerator;