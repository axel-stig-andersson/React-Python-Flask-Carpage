var HOST = 'http://127.0.0.1:5000/'

export const apiRequest = async(path:string, method:string, requestBody?:any) => {
    if (method === 'GET') {
        const res = await fetch (HOST + path, {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            },
            body:JSON.stringify(requestBody)
        });
        const data = await res.json()
        return data
    }
    if (method === 'POST') {
        const res = await fetch(`${HOST}${path}`, {
            method:'POST',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*'
            },
            body:JSON.stringify(requestBody)
        }).then(res => res.json()).then(value => console.log("Response: ", value))
    }
}