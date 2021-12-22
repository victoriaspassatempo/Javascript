var valor = document.getElementById('sites');

function redir(){
    if(valor.value == "site1") 
        window.open("https://www.youtube.com/");
    else if(valor.value == "site2") 
        window.open("https://mail.google.com/");
    else if(valor.value == "site3")
        window.open("https://www.instagram.com/");
    else
        return 0 
}
