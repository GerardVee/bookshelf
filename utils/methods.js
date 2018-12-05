const header = new Headers({
    'Content-Type': 'application/json'
});

export const get = () => ({ method: 'GET', headers: header });
export const post = (body) => ({ body: JSON.stringify(body), method: 'POST', headers: header });
export const patch = (body) => ({ body: JSON.stringify(body), method: 'PATCH', headers: header });
export const deleteR = (body) => ({ body: JSON.stringify(body), method: 'DELETE', headers: header });