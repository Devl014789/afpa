let input = '';

function ShowValue(btn) {
    input = input + btn.value;
    document.getElementById('operation').innerText = input;

};

function ckMath() {
    let tmp = eval(input);
    if (tmp != undefined) {
        document.getElementById('resultat').innerText = tmp;
    } else {
        document.getElementById('resultat').innertext = tmp = 'Error';
    }
    input = '';
};

function Reset() {
    document.getElementById('operation').innerText = input = '0';
    input = '';
    document.getElementById('resultat').innerText = input
};

function previousRemove() {
 let leninput = input.length;
 input = input.slice(0, leninput - 1);
 document.getElementById('operation').innerText = input;
}

function calculRacine() {
 input = Math.sqrt(input)
 document.getElementById('resultat').innerText = input;
 input = ''
}

function calculPi() {
 if(input == '0') {
     input = Math.PI + input;
 } else {
     input = input + Math.PI
 }
 document.getElementById('operation').innerText = input;

}