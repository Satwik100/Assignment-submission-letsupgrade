function addtask()
{
    let data=document.getElementById('inp').value;

    document.getElementById('two').innerHTML+=`<h1 class="todo">${data}</h1>`

    data=document.getElementById('inp').value=""

}
function changecolour()
{
    document.getElementById('two').style.backgroundColor="cyan";
}