const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const select = document.getElementById('select')
const hasil = document.getElementById('hasil')
const button = document.getElementById('button')

button.addEventListener('click', function(e){
    e.preventDefault()
    if(!!select.value == false){
        select.classList.add('error')
        select.focus()
        hasil.value = ''
    }
    if(!!input1.value == false){
        input1.classList.add('error')
        input1.focus()
        hasil.value = ''
    }
    if(!!input2.value == false){
        input2.classList.add('error')
        input2.focus()
        hasil.value = ''
    }

    if(!!select.value == true && !!input1.value == true && !!input2.value == true){
        input1.classList.remove('error')
        input2.classList.remove('error')
        select.classList.remove('error')
        switch(select.value){
            case 'tambah':
                hasil.value = (Number(input1.value) + Number(input2.value))
                break;
            case 'kurang':
                hasil.value = (Number(input1.value) - Number(input2.value))
                break;
            case 'kali':
                hasil.value = (Number(input1.value) * Number(input2.value))
                break;
            case 'bagi':
                hasil.value = (Number(input1.value) / Number(input2.value))
                break;
        }
    }


})
