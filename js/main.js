
let amount = prompt('You amount');
let currency = prompt('You currency');

if(amount === '' || currency === ''){


    alert('All fields are required')
}else{

    if(amount === NaN || currency === NaN){

        alert('You can not put string')
    }else{

        if(currency === 'dollar'){

            console.log(`${amount} ${currency} = ${amount * 86.2} BDT`)
        }else if(currency === 'euro'){
    
            console.log(`${amount} ${currency} = ${amount * 115.2} BDT`)
        }else if(currency === 'pound'){
    
            console.log(`${amount} ${currency} = ${amount * 98.2} BDT`)
        }
    }
    
}

