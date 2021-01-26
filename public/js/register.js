const Uname = document.querySelector('.nameInput')
const error = document.querySelector('.error')
const form = document.querySelector('#form')

form.addEventListener('submit' , (e)=>{
    let messages =[]
    // For Name 
    var names = ['john', 'roshan', 'doe']
    console.log(Uname.value.toLowerCase())
    if (Uname.value.length!=0)
    {
        var temp = Uname.value.toLowerCase()
        var include = names.includes(temp)
        if (!include)
        {
            messages.push('You are not valid User')
        }
    }
    if (messages.length >0)
    {
        e.preventDefault()
        error.innerText = messages[0]
    }
})