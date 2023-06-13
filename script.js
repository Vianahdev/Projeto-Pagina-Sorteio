let l_names = [];

let l_incluir = document.getElementById('Incluir');
let l_sortear = document.getElementById('Sortear')

l_incluir.addEventListener('click', Incluir)
l_sortear.addEventListener('click', Sortear)

function Incluir(){
    let l_name = document.getElementById("txt1");
    let l_list = document.getElementById("name");

    let l_result = l_name.value;

    l_names.push(l_result) 

    l_list.innerHTML = l_names;
}

function Sortear(){
    let l_numpessoa = l_names.length;

    let l_numsort = Math.floor(Math.random() * l_numpessoa);

    let l_result = document.getElementById("ganhador");

    l_result.innerHTML = l_names[l_numsort];
}
