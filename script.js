// ///////////////////////normal
// const input=document.getElementById('input-event')
// input.addEventListener("keyup",(e)=>
// {
//     console.log(input.value);
// })

/////////////////////////////Using debouncing
const input=document.getElementById('input-event')
function debounce(func,delay)
{
let timeoutId;
return function(...args) {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId=setTimeout(()=>
    {
            func.call(this,...args)
    },delay)

};


}
function findSuggestion(e)
{
console.log("suggestion for ",e.target.value);
}
const decoratedFindSuggestions=debounce(findSuggestion,300)

input.addEventListener("keyup",decoratedFindSuggestions)
