//p9.html
let noSel = document.querySelector('#no'); // left side select option
let yesSel = document.querySelector('#yes'); //right side select option

let addBtn = document.querySelector('#add');
let removeBtn = document.querySelector('#remove');


//DocumentFragment.addEventListener(event,callback)
addBtn.addEventListener('click', function(e) {
    e.preventDefault();
    //alert('add btn clicked')
    
    let selOtp = document.querySelectorAll("#no option:checked");
        console.log('selected options =', selOtp);

        let exstOpt = document.querySelectorAll('#yes option');
        yesSel.replaceChildren(...selOtp,...exstOpt); //Array -> parameter
});

removeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    //alert('remove btn clicked')
    let exstOpt = document.querySelectorAll('#yes option:checked');

    let selOpt = document.querySelectorAll("#no option");
    noSel.replaceChildren(...exstOpt,...selOpt); //Array -> parameter
});