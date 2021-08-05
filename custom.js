const txtFst = "Welcome to the Pearl Station";

const txtFArry = txtFst.split("");
console.log(txtFArry);

document.getElementById('input-text').focus();

var letters,
counter = 0;
const writedata = ()=> {
    letters = txtFArry[counter];
    console.log(letters);
    document.getElementById('input-text').value += letters;
    counter++;
    if(txtFArry.length == counter ){clearInterval(timeDatawrite)};
};

let timeDatawrite = setInterval(writedata,100);

