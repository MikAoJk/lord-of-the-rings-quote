// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import path from 'path';
import {promises as fs} from 'fs';

export type Quote = {
    text: string
    author: string | null
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<Quote>>
) {
        const jsonDirectory = path.join(process.cwd(), 'src/json');
        const json = await fs.readFile(jsonDirectory + '/data.json', 'utf8');

        const quotes: Array<Quote> = JSON.parse(json);

        res.status(200).json(quotes);
}
