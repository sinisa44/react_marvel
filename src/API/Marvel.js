import config from './../config';
import axios from 'axios';
import md5 from 'md5';

const MarvelGet = async(url, offset) => {
    const response = await axios.get(
        `http://gateway.marvel.com:80/v1/public${url}${generateUrl()}&offset=${setOffset(offset)}&limit=100`
    )

    return response.data.data.results;
}

const setOffset = offset => {
    if( ! offset ) {
        return `${Math.floor(Math.random() * 9) + 1}00`;
    }

    return offset;
}

const generateUrl = () => {
    const { publicKey, privateKey } = config;

    let timestamp = new Date().getTime();
    const hash = md5(timestamp + (privateKey + publicKey));
    const url = `?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`

    return url;
}

export { MarvelGet };