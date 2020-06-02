import { RequestHandler, Request } from 'express';
import { response } from '../module/response';
import { message } from '../module/message';
import request from 'request';
import { load } from 'cheerio';
import { inha_plaza } from '../entity/inha_plaza';
import { getConnection, getRepository} from 'typeorm';

export const getTop: RequestHandler = async (req, res) => {
    try {  
        const crawl = () =>
            new Promise<string>((resolve, reject) => {
                request.get({
                        url: 'https://plaza.inha.ac.kr/plaza/2093/subview.do',
                        jar: true
                    }, (err, res) => {
                    if (err) reject(err);
                    resolve(res.body);
                });
        });
        const result = await crawl();
        const length = (html: string) => {
            if (html === '') return [];
            const $ = load(html);
            const crawledRealtimeKeywords = $('#menu2093_obj18 > div._fnctWrap._articleTable > form > table > tbody').children('tr');
            return $(crawledRealtimeKeywords).length;
        };
        const extract = (html: string, j:number) => {
            if (html === '') return [];
            const $ = load(html);
            const crawledRealtimeKeywords = $(`#menu2093_obj18 > div._fnctWrap._articleTable > form > table > tbody > tr:nth-child(${j}) > td._artclTdTitle > a`,);
            const keywords = $(crawledRealtimeKeywords)
              .map(
                (i, ele) => {
                    return {content: $(ele).text(),
                    link: $(ele).attr()};
                },
              )
              .get();
            return keywords;
        };
        const postedAt = (html: string, j:number) => {
            if (html === '') return [];
            const $ = load(html);
            const crawledRealtimeKeywords = $(`#menu2093_obj18 > div._fnctWrap._articleTable > form > table > tbody > tr:nth-child(${j}) > td._artclTdRdate`,);
            const keywords: string[] = $(crawledRealtimeKeywords)
              .map(
                (i, ele): string => {
                    return $(ele).text();
                },
              )
              .get();
            return keywords;
        };
        let top: any[] = [];
        for (let i: number = 1; i <= length(result); i++) {
            let res = extract(result, i)[0];
            let content: string = res.content.replace('\n\t\t\t\t\t\t\t\t\t','');
            content = content.replace('\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t','');
            content = content.replace('\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t','');
            let link: string = res.link.href;
            let posted_at: string = postedAt(result, i)[0];
            let elem: {
                content: string,
                posted_at: string,
                link: string
            } = {
                content,
                posted_at,
                link 
            }
            top.push(elem);
            const inha_plaza_create = await getRepository(inha_plaza)
            .save({
                title: content,
                link,
                posted_at
            });
        }
        console.log(top)
        res.status(201).json(response.success(message.READ_SUCCESS, top));
    } catch(err) {
        console.log(err)
    }
};

