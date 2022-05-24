function outer(){
    const a = 23;
    function inner() {
        console.log(a);
        }
        inner();
}


document.getElementById('btn'). addEventListener('click', () =>{
    outer();
})

// F12 codigo fuente en Source. ctrl + P busco el archivo para debugger. click para el break point. 
// F10 permite saltar de linea en linea. paso a paso
//con F11 entro en la funcion


function adder(first) {
    function add (second) {
        console.log(first+second);
    }
    return add;
}

document.getElementById('btnSumar').addEventListener('click',()=>{
    const primerLlamado = adder(10);
    primerLlamado(5);

})


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
document.getElementById('btnAxiosRequest').addEventListener('click', async() =>{
const fnInner = outer(); // > retorna la referencia a inner(page). a la funcion interna que espera otra parametro
const jsonObject = await fnInner();
alert(JSON.stringify(jsonObject))
});


function checkUsername(){
    var elMsg = document.getElementById('feedback');
    if(this.value.length < 5){
        elMsg.textContent = 'Userame must be 5 characters or more';
    } else {
        elMsg.textContent = '';
    }
}

var elUsername = document.getElementById('username');
elUsername.addEventListener('blur', checkUsername, false)