document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("userForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let amount = parseInt(document.getElementById("amount").value);

        let cardContainer = document.getElementById("farmersList");
        cardContainer.innerHTML = "";

        let card = document.createElement("li");
        card.classList.add("card");

        if (amount === 30000) {
            card.classList.add("regular");
            card.innerHTML = `<h3>Regular Card</h3><p>Name: ${firstName} ${lastName}</p><p>Registration Amount: ${amount}</p>`;
        } else if (amount === 50000) {
            card.classList.add("advance");
            card.innerHTML = `<h3>Advance Card</h3><p>Name: ${firstName} ${lastName}</p><p>Registration Amount: ${amount}</p>`;
        } else if (amount === 100000) {
            card.classList.add("platinum");
            card.innerHTML = `<h3>Platinum Card</h3><p>Name: ${firstName} ${lastName}</p><p>Registration Amount: ${amount}</p>`;
        } else {
            card.innerHTML = "<p>Invalid registration amount!</p>";
        }

        cardContainer.appendChild(card);
    });
});

// // Create a new card element
// const card = document.createElement("div");
// const loanContainer = document.getElementById("loanContainer");

// // Dynamically generate content based on loan amount
// if (loan === 50000) {
//     card.classList.add('Regular');
//     card.innerHTML = `<h3>Regular Card</h3><p>Name: ${firstName} ${lastName}</p><p>Hello ${firstName} ${lastName}, you have successfully acquired the applied ${loan} from Farmer's-aid. This loan has an increment of 8% after every month</p>`;
// } else if (loan > 50000 && loan < 75000) {
//     card.classList.add("Regular");
//     card.innerHTML = `<h3>Regular Card</h3><p>Name: ${firstName} ${lastName}</p><p>Sorry ${firstName} ${lastName}, please subscribe to a higher card to be able to acquire this amount</p>`;
// } else if (loan === 75000) {
//     card.classList.add('Advance');
//     card.innerHTML = `<h3>Advance Card</h3><p>Name: ${firstName} ${lastName}</p><p>Hello ${firstName} ${lastName}, you have successfully acquired the applied ${loan} from Farmer's-aid. This loan has an increment of 8% after every month</p>`;
// } else if (loan > 75000 && loan < 150000) {
//     card.classList.add("Advance");
//     card.innerHTML = `<h3>Advance Card</h3><p>Name: ${firstName} ${lastName}</p><p>Sorry ${firstName} ${lastName}, please subscribe to a higher card to be able to acquire this amount</p>`;
// } else if (loan === 150000) {
//     card.classList.add("Platinum");
//     card.innerHTML = `<h3>Platinum Card</h3><p>Name: ${firstName} ${lastName}</p><p>Hello ${firstName} ${lastName}, you have successfully acquired the applied ${loan} from Farmer's-aid. This loan has an increment of 8% after every month</p>`;
// } else if (loan > 150000) {
//     card.classList.add("Platinum");
//     card.innerHTML = `<h3>Platinum Card</h3><p>Name: ${firstName} ${lastName}</p><p>Sorry ${firstName} ${lastName}, we only have a loan limit of 150000</p>`;
// }

// console.log("Generated Card:", card);

// Append the card to the loan container
// Define the loanContainer variable
let loanContainer = document.getElementById('loanContainer');

// Now you can use the loanContainer variable
loanContainer = 'This is the loan container.';

function checkEligibility() {
    let amountInput = prompt("Enter loan amount:");
    if (amountInput === null || amountInput === "") {
        // Handle cancel or empty input
        return;
    }
    let amount = parseInt(amountInput);
    if (isNaN(amount)) {
        // Handle invalid input
        return;
    }

    if (amount > 150000) {
        document.getElementById("status").innerHTML = "Loan Limit Exceeded. Maximum loan amount is ksh150,000.";
        return;
    }

    const cardType = prompt("Enter card type (regular/advance/platinum):").toLowerCase();
    if (cardType !== "regular" && cardType !== "advance" && cardType !== "platinum") {
        // Handle invalid card type
        document.getElementById("status").innerHTML = "Invalid card type.";
        return;
    }

    if (cardType === "regular") {
        if (amount >= 50000 &&  amount < 75000) {
            document.getElementById("status").innerHTML = `Congratulations! You have qualified for the loan and received Ksh${amount}.This loan has an increment of 8% after every 2 months`;
        } else if (amount < 50000){
            document.getElementById("status").innerHTML = "Sorry!,we only offer loans not less than 50000.";
        }
    } else if (cardType === "advance") {
        if (amount >= 75000 && amount < 100000 ) {
            document.getElementById("status").innerHTML = `Congratulations!  You have qualified for the loan and received Ksh${amount}.This loan has an increment of 12% after every 2 months`;
        } else if(amount > 100000){
            document.getElementById("status").innerHTML = "Please subscribe to a higher card to qualify for the loan.";
        }
    } else if (cardType === "platinum") {
        if (amount <= 150000) {
            document.getElementById("status").innerHTML = `Congratulations! You have qualified for the loan and received Ksh${amount}it.This loan has an increment of 20% after every 2 months"`;
        } else {
            document.getElementById("status").innerHTML = "Please subscribe to a higher card to qualify for the loan.";
        }
    }
}

//calculating the amount of land that can be leased
function rentLand() {
    let acresToRent = 0;
    let maxAcres = 10;
    acresToRent = parseInt(prompt("Enter acres to rent"));
    let cardType = prompt("Enter card type (regular/advanced/platinum):").toLowerCase();
    if (cardType !== "regular" && cardType !== "advanced" && cardType !== "platinum") {
        // Handle invalid card type
        document.getElementById("status").innerHTML = "Invalid card type.";
        return;
    }
     // Check if the requested acres exceed the allowed limit based on the card type
     if ((cardType === "regular" && acresToRent > 2) ||
     (cardType === "advanced" && acresToRent > 5) ||
     (cardType === "platinum" && acresToRent > 10)) {
     window.alert("Maximum acres allowed for the selected card type exceeded.");
     return;
 }
    //if a number which is less than zero and greater than 10
    if (acresToRent <= 0 || acresToRent > maxAcres) {
        alert("Invalid number of acres to rent.");
        return;
    }

    acresToRent += acresToRent;
    updateCard(acresToRent, cardType);
}

function getMaxAcres(acresToRent, cardType) {
    if (cardType === "regular") {
        if (acresToRent >= 0 && acresToRent < 2) {
            window.alert("Congratulations! your request to rent land has been received, details are shown in the card");
        } else if (acresToRent < 0) {
            window.alert("Please subscribe to a higher card to be able to rent this amount of land.");
        }
    } else if (cardType === "advanced") {
        if (acresToRent >= 0 && acresToRent < 5) {
            window.alert("Congratulations! your request to rent land has been received, details are shown in the card");
        } else if (acresToRent > 5) {
            window.alert("Please subscribe to a higher card to be able to rent this amount of land.");
        }
    } else if (cardType === "platinum") {
        if (acresToRent >= 0 && acresToRent < 10) {
            window.alert("Congratulations! your request to rent land has been received, details are shown in the card");
        } else if (acresToRent > 10) {
            window.alert("Sorry we only rent up to 10 acres of land")
        }
    }
}

function getFertilizerBags(cardType) {
    switch (cardType) {
        case "regular":
            return 5;
        case "advanced":
            return 10;
        case "platinum":
            return 15;
        default:
            return 0;
    }
}

function updateCard(acresToRent, cardType) {
    let fertilizerBags = getFertilizerBags(cardType);
    let costPerAcre = 12000;
    let totalCost = acresToRent * costPerAcre;

    document.getElementById("cardType").innerHTML = "Card Type: " + cardType;
    document.getElementById("landRented").innerHTML = "Acres Rented: " + acresToRent;
    document.getElementById("totalCost").innerHTML = "Total Cost: Ksh" + totalCost;
    document.getElementById("fertilizerInfo").innerHTML = "Fertilizer Info: You will receive " + fertilizerBags + " bags of fertilizer per acre rented.";
    getMaxAcres(acresToRent, cardType);

}
// create an shop that will have the items in the company's stock

//function that will display the items that are in the shop and the stock amount

// Items in the shop with their initial stock
// const items = [
//     { name: "Item 1", stock: 10, amount: 10 },
//     { name: "Item 2", stock: 15, amount: 20 },
//     { name: "Item 3", stock: 8, amount: 5 }
//   ];
  
//   // Function to display items in the shop
//   function displayItems() {
//     const itemsList = document.getElementById("itemsList");
//     itemsList.innerHTML = ""; // Clear previous list
    
//     items.forEach(item => {
//       const li = document.createElement("li");
//       li.textContent = `${item.name} - Stock: ${item.stock}, Amount: ${item.amount}`;
      
//       const buyButton = document.createElement("button");
//       buyButton.textContent = "Buy";
//       buyButton.addEventListener("click", () => buyItem(item));
      
//       li.appendChild(buyButton);
//       itemsList.appendChild(li);
//     });
//   }
  
//   // Function to buy an item
//   function buyItem(item) {
//     if (item.stock > 0) {
//       item.stock--;
//       item.amount++;
//       displayItems(); // Update displayed items
//     } else {
//       alert("Item out of stock!");
//     }
//   }
  
//   // Event listener for the show items button
//   document.getElementById("showItemsBtn").addEventListener("click", () => {
//     document.getElementById("shopItems").style.display = "block";
//     displayItems();
//   });
 // Items in the shop with their initial stock
 const items = [
    { name: "Maize Seeds", price: 190, stock: 10 },
    { name: "Bean Seeds", price: 180, stock: 10 },
    { name: "Fertilizer", price: 1650, stock: 10 },
    { name: "Jembe", price: 450, stock: 10 }
];

function displayItems() {
    const itemsList = document.getElementById("itemsList");
    itemsList.innerHTML = ""; // Clear previous list
    
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - Price: Ksh ${item.price} per kilo or unit, Stock: ${item.stock}`;
      
        const buyButton = document.createElement("button");
        buyButton.textContent = "Buy";
        buyButton.addEventListener("click", () => buyItem(item));
      
        li.appendChild(buyButton);
        itemsList.appendChild(li);
    });
}

function buyItem(item) {
    if (item.stock > 0) {
        item.stock--;
        displayItems(); // Updating the displayed items
    } else {
        alert("Item is sold out!");
    }
}

document.getElementById("showItemsBtn").addEventListener("click", () => {
    document.getElementById("shopItems").style.display = "block";
    displayItems();
});
function formSubmission(event) {
    event.preventDefault(); // prevent default form submission behavior

    // Assuming you have variables firstName, lastName, and amount defined elsewhere
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const amount = document.getElementById("amount").value;

    fetch("http://localhost:3000/usersform", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            amount: amount
        })
    })
    .then((response) => response.json())
    .then((data) => {
        // Handle successful response
        console.log("Data posted successfully:", data);
        // Optionally, perform any actions after successful submission
    })
    .catch((error) => {
        // Handle error
        console.error("Error posting data:", error);
        // Optionally, display an error message to the user
    });
}
document.getElementById("userForm").addEventListener("submit", formSubmission);

// Function to display all farmer's names
let visible = false;
const showFarmersList = document.getElementById("showFarmer");
const farmersList = document.getElementById("farmerlist");
showFarmersList.addEventListener("click", () => {
    if (!visible) {
        fetch("http://localhost:3000/user")
            .then(response => response.json())
            .then(farmers => {
                farmersList.innerHTML = "";
                farmers.forEach((farmer) => {
                    const li = document.createElement("li");
                    li.textContent = `${farmer.FirstName} ${farmer.LastName}`;
                    li.addEventListener("click", () => {
                        // Handle click event if needed
                    });
                    farmersList.appendChild(li);
                });
                visible = true;
            })
            .catch((error) => console.error("Error: " + error));
    } else {
        farmersList.innerHTML = "";
        visible = false;
    }
});

     

// displaying farmers details on the card
document.getElementById('showFarmerDetails').addEventListener('click', function() {
    // Assuming data is fetched from a JSON file
    fetch('http://localhost:3000/user')
       .then(response => response.json())
       .then(data => {
            // Assuming data is an array of  the farmer objects
            const farmer = data[Math.floor(Math.random() * data.length)]; // Randomly select a farmer for demonstration
        
  
        const farmerCardContainer = document.getElementById('farmerCardContainer');
        const farmerCard = document.createElement('div');
        farmerCard.classList.add('card');
        let  = prompt("Enter card type")
  
        if (farmer.cardType === 'regular') {
          farmerCard.classList.add('yellow');
        } else if (farmer.cardType === 'advanced') {
          farmerCard.classList.add('red');
        } else if (farmer.cardType === 'platinum') {
          farmerCard.classList.add('black');
        }
  
        farmerCard.innerHTML = `
          <p>First Name: ${farmer.firstName}</p>
          <p>Last Name: ${farmer.lastName}</p>
          <p>Card Type: ${farmer.cardType}</p>
          <p>Registration Amount: Ksh${farmer.registrationAmount}</p>
          <p>Loan Acquired: Ksh${farmer.loanAcquired}</p>
          <p>Acres Rented: ${farmer.acresRented}</p>
          <p>Total Cost for Renting Land: Ksh${farmer.acresRented * 12000}</p>
          <p>Total Spend: Ksh${farmer.registrationAmount + farmer.loanAcquired + (farmer.acresRented * 12000)}</p>
        `;
  
        farmerCardContainer.innerHTML = ''; // Clear previous card
        farmerCardContainer.appendChild(farmerCard);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  
  

    })
//calculating profit based on the regisration amount
function calculateProfitOrLoss() {
    let registrationAmount = parseFloat(document.getElementById("registrationAmount").value);
    let totalSales = parseFloat(document.getElementById("totalSales").value);
    let resultElement = document.getElementById("result");
    let profitOrLoss;

    if (isNaN(registrationAmount) || isNaN(totalSales)) {
        resultElement.textContent = "Please enter valid numbers.";
        return;
    }

    if (totalSales >= registrationAmount) {
        profitOrLoss = totalSales - registrationAmount;
        resultElement.textContent = "Profit: Ksh" + profitOrLoss.toFixed(2);
    } else {
        profitOrLoss = registrationAmount - totalSales;
        resultElement.textContent = "Loss: Ksh" + profitOrLoss.toFixed(2);
    }
}



    
