$(document).ready(onReady);

let clickcount = 0;

function onReady(){
    $('.button_generate').on('click', Box);
    $('.button_yellow').on('click', makeBoxYellow)

}

function Box(){
    clickcount ++;
    $('.js_container').append(`
        <div class="Box">
    <p>${clickcount}</p>
    </div>
    `)
}

function makeBoxYellow(){
    clickcount ++;
    $('.js_container').append(`
        <div class="yellow">
    <p>${clickcount}</p>
    </div>
    `)
}