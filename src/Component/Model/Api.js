export async function Data() {
    var data = await fetch('https://reqres.in/api/users/2')
        .then(response => response.json())
        .then(result => {
            return result
        });

    return data;
}

export async function Upload(data){
    var upload = await fetch("https://reqres.in/api/users", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then((responseData) => {
            upload = responseData;
            return responseData;
        })
        .catch(error => console.log(error));

    return upload;
}