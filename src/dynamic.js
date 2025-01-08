const btnRegisterPoint = document.getElementById('RegisterPoint')
const btnShowPoints = document.getElementById('showPoints')
const btnShowHours = document.getElementById('showHours')

const divTimeBox = document.querySelector('.divTimeBox')
const spanLastPoint = document.getElementById('lastPoint')
const $pDay = document.createElement('p')
const $pDate = document.createElement('p')
const $pHour = document.createElement('p')

btnShowHours.addEventListener('click', () => {
    //timePeriod[0].$pHour - timePeriod[1].$pHour
    // let teste = [[6,5.6],[3,4,5],[4,7,9],[4,6,2]]
    // console.log(teste[0][0] - teste[1][0])
})

const timePeriod = []

btnRegisterPoint.addEventListener('click', () => {
    if(timePeriod.length > 3){
        console.log("Fim de periodos, limite atingido")
        return
    }

        fetch('http://localhost:3000/time-register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            const addLeadingZeroHours = (num) => (num < 10 ? `0${num}` : num) //Senior Code
            const addLeadingZeroDays = (num) => (num < 10 ? `0${num}` : num) //Senior Code
    
            // const addLeadingZero = function(num){
            //     return num < 10 ? `0${num}` : num; //Pleno Code
            // }
    
            // function addLeadingZero(num) { //Junior Code
            //     if(num < 10){
            //         return `0${num}`
            //     }else{
            //         return num
            //     }
            // }
    
            const formattedTime = `Horário: ${addLeadingZeroHours(data.hours)}:${addLeadingZeroHours(data.minutes)}:${addLeadingZeroHours(data.seconds)}`
            const formattedDate =`Data: ${addLeadingZeroHours(data.day)}/${addLeadingZeroHours(data.month)}/${addLeadingZeroHours(data.year)}`

            const groupTimesObject = [
                formattedTime,
                formattedDate,
                `Dia da semana: ${data.dayOfWeek}`
            ]

            timePeriod.push(groupTimesObject)
            // for(item of groupTimesObject){
            //     spanLastPoint.innerHTML = `<div>${item}</div>`
            // }
            
            spanLastPoint.innerHTML = groupTimesObject.map(item => `<div>${item}</div>`).join('')
        })
        .catch((error) => {
            console.error('Erro ao buscar os dados:', error)
        });
})

btnShowPoints.addEventListener("click", () => {
    console.clear();
    for(times of timePeriod){
        console.log(times)
    }
})



