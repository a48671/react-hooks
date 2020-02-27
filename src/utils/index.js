import { LIMIT } from '../constants';

export const range = (start, total) => [...Array(total).keys()].map(key => key + start);

export const queryString = {
    parse: query => query.replace('?', '').split('&').reduce((acc, item) => {
        const arrayItem = item.split('=');
        return ({
            ...acc,
            [arrayItem[0]]: arrayItem[1]
        });
    }, {}),
    stringify: object => Object.keys(object).map(key => `${key}=${object[key]}`).join('&')
};

export const getPaginator = (search) => {
    const page = queryString.parse(search).page ? Number(queryString.parse(search).page) : 1;
    const offset = LIMIT * page - LIMIT;
    return {limit: LIMIT, offset, page};
};