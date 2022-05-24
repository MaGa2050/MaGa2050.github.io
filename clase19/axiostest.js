async function getUserData() {

   const response = await  axios.get('https://reqres.in/api/users?page=2')

   console.log(response)

   return response
}

//Closure

function outer(){
    const endpoint = "https://reqres.in/api/users";
    async function inner(page) {
        if(!page){
            page = 1;
        }
        return await axios.get(`${endpoint}?page=${page}`);
    }
    return inner;
}

//invocar

const fnInner = outer(); // > retorna la referencia a inner(page). a la funcion interna que espera otra parametro
const jsonObject = await fnInner();

// asociar al btn un avento

const btn = document.getElementById('btnGetData');

//asocio el evento clic

btn.addEventListener('click', async () => {
    //capturo el div por su ID
    
    const response = await getUserData();
    //AXIOS retorna obj.data > json que viene del servidor
    const jsonData = response.data // ojo, no es el data
    //puedo actualizar el div con JsonData
    const jsonDataAsText = JSON.stringify(jsonData);
    //actualizao el valor del div     
    const divEnHtml = document.getElementById('content');
    
    divEnHtml.innerHTML = jsonDataAsText;
});
