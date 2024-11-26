import service from "./service.guard";

function handleResponse(error, statusCode, message, data) {
    return { error: error, statusCode: statusCode, message: message, data: data };
}

export function service_get(url) {
    return new Promise((resolve, reject) => {
        service.get(url)
            .then(res => {
                resolve(handleResponse(res.data.error, res.data.statusCode, res.data.message, res.data.data));
            })
            .catch(err => {
                console.error(err);
                resolve(handleResponse(9, 999, err.message, err.message)); 
            });
    });
}

export function service_post(url, body) {
    return new Promise((resolve, reject) => {
        service.post(url, body)
            .then(res => {
                resolve(handleResponse(res.data.error, res.data.statusCode, res.data.message, res.data.data));
            })
            .catch(err => {
                console.error(err);
                resolve(handleResponse(9, 999, err.message, err.message));
            });
    });
}
