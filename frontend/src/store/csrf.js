
// Define a restore CSRF 

export const restoreCSRF = async () => {
    // debugger
    const res =  await csrfFetch('/api/session');
    storeCSRF(res);
    return res;
}

export const storeCSRF = (res) => {
    // debugger
    const token = res.headers.get('X-CSRF-Token');
    if (token) {
    sessionStorage.setItem('X-CSRF-Token',token)
    }
}

// Define a csrfFetch 

const csrfFetch = async (url,options = {}) => {
    options.method = options.method || 'GET';
    options.headers = options.headers || {}
    if (options.method !== 'GET'){
        options.headers['Content-Type'] = options.headers['Content-Type'] || 'application/json';
        options.headers['X-CSRF-Token'] = sessionStorage.getItem("X-CSRF-Token")
    }
    const res = await fetch(url,options);

    if (res.status >= 400) throw res; // This is caught in a function somewhere ;

    return res;

}

export default csrfFetch

