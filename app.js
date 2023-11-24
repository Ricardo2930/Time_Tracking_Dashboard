const workCurrent = document.querySelector('.work-data-current');
const workPrevious = document.querySelector('.work-data-previous');

const playCurrent = document.querySelector('.play-data-current');
const playPrevious = document.querySelector('.play-data-previous');

const studyCurrent = document.querySelector('.study-data-current');
const studyPrevious = document.querySelector('.study-data-previous');

const exerciseCurrent = document.querySelector('.exercise-data-current');
const exercisePrevious = document.querySelector('.exercise-data-previous');

const socialPrevious = document.querySelector('.social-data-previous');
const socialCurrent = document.querySelector('.social-data-current');

const selfcareCurrent = document.querySelector('.selfcare-data-current');
const selfcarePrevious = document.querySelector('.selfcare-data-previous');

const daily = document.querySelector('.user-times-daily');
daily.addEventListener('click', () => {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            workCurrent.innerHTML = `${data[0].timeframes.daily.current}hrs`
            workPrevious.innerHTML = `Last Daily - ${data[0].timeframes.daily.previous}hrs`

            playCurrent.innerHTML = `${data[1].timeframes.daily.current}hrs`
            playPrevious.innerHTML = `Last Daily - ${data[1].timeframes.daily.previous}hrs`

            studyCurrent.innerHTML = `${data[2].timeframes.daily.current}hrs`
            studyPrevious.innerHTML = `Last Daily - ${data[2].timeframes.daily.previous}hrs`

            exerciseCurrent.innerHTML = `${data[3].timeframes.daily.current}hrs`
            exercisePrevious.innerHTML = `Last Daily - ${data[3].timeframes.daily.previous}hrs`

            socialCurrent.innerHTML = `${data[4].timeframes.daily.current}hrs`
            socialPrevious.innerHTML = `Last Daily - ${data[4].timeframes.daily.previous}hrs`

            selfcareCurrent.innerHTML = `${data[5].timeframes.daily.current}hrs`
            selfcarePrevious.innerHTML = `Last Daily - ${data[5].timeframes.daily.previous}hrs`
        })
})


const weekly = document.querySelector('.user-times-weekly');
weekly.addEventListener('click', () => {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            workCurrent.innerHTML = `${data[0].timeframes.weekly.current}hrs`
            workPrevious.innerHTML = `Last Week - ${data[0].timeframes.weekly.previous}hrs`

            playCurrent.innerHTML = `${data[1].timeframes.weekly.current}hrs`
            playPrevious.innerHTML = `Last Week - ${data[1].timeframes.weekly.previous}hrs`

            studyCurrent.innerHTML = `${data[2].timeframes.weekly.current}hrs`
            studyPrevious.innerHTML = `Last Week - ${data[2].timeframes.weekly.previous}hrs`

            exerciseCurrent.innerHTML = `${data[3].timeframes.weekly.current}hrs`
            exercisePrevious.innerHTML = `Last Week - ${data[3].timeframes.weekly.previous}hrs`

            socialCurrent.innerHTML = `${data[4].timeframes.weekly.current}hrs`
            socialPrevious.innerHTML = `Last Week - ${data[4].timeframes.weekly.previous}hrs`

            selfcareCurrent.innerHTML = `${data[5].timeframes.weekly.current}hrs`
            selfcarePrevious.innerHTML = `Last Week - ${data[5].timeframes.weekly.previous}hrs`
        })

})


const monthly = document.querySelector('.user-times-monthly');
monthly.addEventListener('click', () => {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            workCurrent.innerHTML = `${data[0].timeframes.monthly.current}hrs`
            workPrevious.innerHTML = `Last Monthly - ${data[0].timeframes.monthly.previous}hrs`

            playCurrent.innerHTML = `${data[1].timeframes.monthly.current}hrs`
            playPrevious.innerHTML = `Last Monthly - ${data[1].timeframes.monthly.previous}hrs`

            studyCurrent.innerHTML = `${data[2].timeframes.monthly.current}hrs`
            studyPrevious.innerHTML = `Last Monthly - ${data[2].timeframes.monthly.previous}hrs`

            exerciseCurrent.innerHTML = `${data[3].timeframes.monthly.current}hrs`
            exercisePrevious.innerHTML = `Last Monthly - ${data[3].timeframes.monthly.previous}hrs`

            socialCurrent.innerHTML = `${data[4].timeframes.monthly.current}hrs`
            socialPrevious.innerHTML = `Last Monthly - ${data[4].timeframes.monthly.previous}hrs`

            selfcareCurrent.innerHTML = `${data[5].timeframes.monthly.current}hrs`
            selfcarePrevious.innerHTML = `Last Monthly - ${data[5].timeframes.monthly.previous}hrs`
        })
})