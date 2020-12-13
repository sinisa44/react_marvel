import config from './../config';
import axios from 'axios';
import md5 from 'md5';

const MarvelGet = async(url) => {
    const response = await axios.get(
        `http://gateway.marvel.com:80/v1/public${url}${generateUrl()}`
    )

    return response.data.data.results;
}

const generateUrl = () => {
    const { publicKey, privateKey } = config;

    let timestamp = new Date().getTime();
    const hash = md5(timestamp + (privateKey + publicKey));
    const url = `?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`

    return url;
}

export { MarvelGet };