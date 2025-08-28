console.log(`JS connected`);

//class element function
function getElementsClass(className){
    return document.getElementsByClassName(className);
}

//id element function
function getElementId(id){
    return document.getElementById(id);
}

//heart count
const heartIcon = getElementsClass("heart-icon");
for (let hearticon of heartIcon){
    hearticon.addEventListener("click", function (){
        const heartCountEl = getElementId("heart-count");
        const heartCount = Number(heartCountEl.innerText);
        heartCountEl.innerText = heartCount +1;
    });
}

//call and coin
let coinBalance = Number(getElementId("coin-balance").innerText);
const coinChange = 20;

const callButtons = getElementsClass("call-btn");

for (let callbtn of callButtons){
    callbtn.addEventListener("click", function (){

        const card = callbtn.closest(".card");
        const cardTitle = card.querySelector("h2").innerText;
        const cardNumber = card.querySelector(".number").innerText;

        if (coinBalance < coinChange){
            alert("❌ you don´t have enough coins! you need at least 20 coins to make a call.");
            return;
        }
        coinBalance -= coinChange;
        getElementId("coin-balance").innerText = coinBalance;

        alert(`📞 Calling ${cardTitle} ${cardNumber}...`);

        //history
        const historyContainer = getElementId("card-history-container");

        const newHistoryCard = document.createElement("div");
        newHistoryCard.classList.add("history-card");

        newHistoryCard.innerHTML = ` 
        <div class="call-info">
            <h3 class="inter">${cardTitle}</h3>
            <p>${cardNumber}</p>
        </div>
        <div class="call-meta">
            <span class="time Hind Madurai">${new Date().toLocaleTimeString()}</span>
        </div>`;
            historyContainer.appendChild(newHistoryCard);
    })
}

//clear history
getElementId("clear-btn").addEventListener("click", function (){
    const historyContainer = getElementId("card-history-container");
    historyContainer.innerHTML = "";
});

//copy button
let totalCopyCount = 0;
const copyCountEl = getElementId("copy-count");

const copyButtons = document.querySelectorAll(".copy-btn");

for (let copyBtn of copyButtons){
    copyBtn.addEventListener("click", function (){
        const card = copyBtn.closest(".card");
        if(!card) return;
        const cardNumberEl = card.querySelector(".number");
        if(!cardNumberEl) return;
        const cardNumber = cardNumberEl.innerText;
        if(!cardNumber) return;

        navigator.clipboard.writeText(cardNumber).then(() => {
            alert(`Number Copied: ${cardNumber}`);

            totalCopyCount++;
            copyCountEl.innerText = totalCopyCount;
        })
        .catch(err =>{
            console.error("Failed to copy: ", err);
        });
    });
}