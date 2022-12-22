console.log("suksess");
document.querySelectorAll("#option a").forEach((a) => {
    // jika nanti di klik maka akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element) => {
        computerChoice(element);
    });
})

function computerChoice(element){
    // Pilihan user
    let pilihanUser = element.target.innerText;

    // Menangkap element result dengan queryselector
    let pilihanKomputer = document.querySelector("#result");
    

    // Membuat array pilihan untuk komputer 
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random komputer 
    pilihanKomputer.innerHTML = choices[Math.round(Math.random() * 2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // jika pilihan user == komputer (draw)
    if(pilihanUser == pilihanKomputer){
        alert("Draw");
        setTimeout(() => alert("DRAWW"), 300);
    }

    // jika pilihan user menang 
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        alert("USER WIN");
    } else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("USER WINN");
    } else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper")
        alert("USER WINNN")
    
    // jika pilihan komputer menang 
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        alert("USER WIN");
    } else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("USER WINN");
    } else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper")
        alert("USER WINNN")
    
}
