import config from '../config'
import TokenService from './token-service'

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
    },
    postReview(providerId, text, rating) {
        console.log(TokenService.getAuthToken())
        return fetch(`${config.API_ENDPOINT}/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                provider_id: providerId,
                rating,
                text
            })
        }).then(res =>
            !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
        );
    },
    getUserEmail() {
        return fetch(`${config.API_ENDPOINT}/users/loggedIn`, {
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
            );
    }




}

export default HandymanApiService;