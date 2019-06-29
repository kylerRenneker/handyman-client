import config from '../config'
// import TokenService from './token-service'

const HandymanApiService = {
    getHandymen(zipcode, service) {
        return fetch(`${config.API_ENDPOINT}/providers/?zipcode=${zipcode}&service=${service}`, {
            headers: {}
        }).then(res =>
            !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
        );
    },
    getHandymanById(handymanId, zipcode) {
        return fetch(`${config.API_ENDPOINT}/providers/${handymanId}/?zipcode=${zipcode}`, {
            headers: {}
        }).then(res =>
            !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
        );
    },
    getAllServices() {
        return fetch(`${config.API_ENDPOINT}/`, {
            headers: {}
        }).then(res =>
            !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
        );
    },
    getHandymanReviews(handymanId, zipcode) {
        return fetch(`${config.API_ENDPOINT}/providers/${handymanId}/reviews/?zipcode=${zipcode}`, {
            headers: {}
        }).then(res =>
            !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
        );
    }


}

export default HandymanApiService;