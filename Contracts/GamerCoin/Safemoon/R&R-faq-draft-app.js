*********************************************************R&R-faq-draft/app.js ******************************************************





let questionBank = [
    {
        questionTitle:"What is R&R?",
        questionBody:"R&R is a new cryptocurrency that is taking over the coin world.",
        id:1,
    },
    {
        questionTitle:"What is R&R?",
        questionBody:"R&R is a new cryptocurrency that is taking over the coin world.",
        id:2,
    },
    {
        questionTitle:"Where can I buy R&R?",
        questionBody:"You can buy safemoon from Vault using Pancake Swap",
        id:3,
    },
    {
        questionTitle:"What is Slippage on Pancake swap?",
        questionBody:"Slippage is 13-16% -- Set it to 15% to buy R&R via pancake swap",
        id:4,
    },
    {
        questionTitle:"Who is the CEO of safemoon?",
        questionBody:"Robert & Rebecca(Boss Bitch) - Capt Hodl",
        id:5,
    },
    {
        questionTitle:"When was the safemoon protocol created?",
        questionBody:"R&R was created in March, 2021",
        id:6,
    },
    {
        questionTitle:"What is Vault?",
        questionBody:"Vault is a safe place to store all  crypto-currencies including R&R. It's safe and free from hacker's attack.",
        id:7,
    },
{
      questionTitle: "Where do I get reliable information aboutR&R?",
      questionBody: "https://R&R$tudios.net/",
      Id:8
}
    
];

let mainSection = document.querySelector(".main-section");

document.addEventListener("DOMContentLoaded",function(){
let populateScreen = questionBank.map(function(item){
    
    return `<article class="article">
    <div class="question-section">
        <div class="question-title">
            <h3>${item.questionTitle}</h3>
          
            <button class="question-toggle">
                <span class="plus-icon">
                    <i class="far fa-plus-square"></i>
                  </span>
                  <span class="minus-icon">
                    <i class="far fa-minus-square"></i>
                  </span>
            </button>
            
        </div>
        <div class="question-body">
            <p>${item.questionBody}
            </p>
        </div>
    </div>
</article>`
});
populateScreen = populateScreen.join(" ");
mainSection.innerHTML = populateScreen;


let toggleBtn = document.querySelectorAll(".question-toggle")
toggleBtn.forEach(function(btn){
    btn.addEventListener("click",function(e){
    let showText = ( e.currentTarget.parentElement.parentElement);
    console.log(showText)
    showText.classList.toggle("show-text")
})

})

});