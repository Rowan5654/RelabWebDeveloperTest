// Generates a random 16 character code and displays it in the referral code box
function GenerateReferralCode() {
    var result = 'www.somecoolwebsite.com/';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charactersLength = characters.length;

    for (var index = 0; index < 16; index++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    document.getElementById("referral-code").innerHTML = result;
}

// Copies the generated link to the users clipboard
function CopyToClipboard() {

    const elem = document.createElement('textarea');
    elem.value = GetTextToCopy();
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
}

//Returns the referral code 
function GetTextToCopy() {
    return document.getElementById('referral-code').innerHTML;
}