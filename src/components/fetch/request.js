const base_url = "https://jsonplaceholder.typicode.com/";
export const address = {
    users: `${base_url}users`,
}

// sOEwqwvbh6A4ZrCpsTFcIxIDWbwAnj1n

export const request = (uri, body) => {
    return new Promise((resolve, reject) => {
        fetch(uri, {
            method: 'post',
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(response => response.error ? reject(response.message) : resolve(response.data))
            .catch(error => reject(error))
    })
}