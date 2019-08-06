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
    getHandymanByUserId(userId) {
        return fetch(`${config.API_ENDPOINT}/providers/user/${userId}`, {
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
        console.log(handymanId, zipcode)
        return fetch(`${config.API_ENDPOINT}/providers/${handymanId}/reviews/?zipcode=${zipcode}`, {
            headers: {}
        }).then(res =>
            !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
        );
    },
    postReview(providerId, text, rating) {
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
    getUser() {
        return fetch(`${config.API_ENDPOINT}/users/loggedIn`, {
            headers: {
                authorization: `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
            );
    },
    postQuoteRequest(quoteRequest) {
        return fetch(`${config.API_ENDPOINT}/quote`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(quoteRequest)
        })
            .then(res =>
                !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
            );
    },
    getQuoteRequests(handymanId) {
        return fetch(`${config.API_ENDPOINT}/quote/myQuotes/${handymanId}`, {
            headers: {
                authorization: `bearer ${TokenService.getAuthToken()}`
            },

        })
            .then(res =>
                !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
            );
    },
    updateUser(userId, updatedUser) {
        return fetch(`${config.API_ENDPOINT}/users/${userId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res =>
                !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
            );
    },
}

export default HandymanApiService;