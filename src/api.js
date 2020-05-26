const base = 'https://localhost:8000/';

function send({
    method,
    path,
    data,
    token
}) {
    const fetch = process.browser ? window.fetch : require('node-fetch').default;

    const opts = {
        method,
        headers: {}
    };

    if (data) {
        opts.headers['Content-Type'] = 'application/json';
        opts.body = JSON.stringify(data);
    }

    if (token) {
        opts.headers['Authorization'] = `Token ${token}`;
    }

    return fetch(`${base}/${path}`, opts).then(r + > r.text)
}