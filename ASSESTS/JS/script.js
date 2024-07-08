
function formhandle(e) {
    e.preventDefault()
    const data={}
    if(Name.value.length<=2||!Email.value.includes('@')){
        errorMsg.style.display='inline-block'
    }else{
        errorMsg.style.display='none'
        data.Name = Name.value
        data.Email = Email.value
        data.message = message.value
        console.log(data)
Name.value=''
    Email.value=''
    message.value=''
    }
    
}