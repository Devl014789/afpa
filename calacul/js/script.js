let input = '';
function ShowValue(btn) {
    input = input + btn.value;
    document.getElementById('operation').innerText = input;

};

function ckMath() {
    let tmp = eval(input);
    if (tmp != SyntaxError) {
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
