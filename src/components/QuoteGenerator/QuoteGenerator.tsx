'use client';

import styles from "./QuoteGenerator.module.css";

import {useState} from "react";

import quotes from "./data/data.json";

export interface Quote {
    text: string;
    author: string;
}
const QuoteGenerator = () => {

    const [randomQuote, setRandomQuote] = useState<Quote>();

    const findRandomQuote = async () => {
        const randomQuote = findRandomQuoteFromJson()
        setRandomQuote(randomQuote);
    }


    return (
        <div className={styles.main}>
            <div className={styles.h1}> <h1>LOTR Quote</h1>
            </div>
            {(randomQuote?.text) &&
                <section>
                    <h3>
                        <span>“</span>
                        {randomQuote?.text}
                        <span>“</span>
                    </h3>
                    <i>- {randomQuote?.author}</i>
                    <div className={styles.button}>
                        <button onClick={findRandomQuote}>New Quote</button>
                    </div>
                </section>

            }
        </div>
    )
}

function findRandomQuoteFromJson(): Quote {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

export default QuoteGenerator;
