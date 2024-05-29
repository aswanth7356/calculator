
const displayData=(n)=>{
    result.value+=n
}

const equalTo=()=>{
    result.value=eval(result.value)
}

const allClear=()=>{
    result.value=""
}

const undo=()=>{
    result.value=result.value.slice(0,-1)
}