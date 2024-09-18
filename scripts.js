const form = document.querySelector("form");

const formData = Array.from(document.forms[0].children); // all input values of form and converting object to Array
formData.pop(); // to remove submit button from the form

const leaderBoardList = [];


const addPlayerHandler = (e) => {
    e.preventDefault();

    const playerDetails = {};

    formData.forEach((input) => playerDetails[input.id] = input.value) // creating object of player with input_id: value

    leaderBoardList.push(playerDetails);

    createPlayer();

    resetForm();
}

const resetForm = () => {
    form.reset();
    formData[0].focus(); // focus on 1st input of form
}

const createPlayer = () => {
    const board = document.getElementById("board");

    board.innerHTML = "";

    leaderBoardList.forEach(({ fname, lname, country, score }, index) => {
        const createRecord = document.createElement("div");

        // Create Fullname Element
        const createFullname = document.createElement("p")
        createFullname.innerText = fname + " " + lname;

        // Create Country Element
        const createCountry = document.createElement("p");
        createCountry.innerText = country;

        // Create Score Element
        const createScore = document.createElement("p");
        createScore.innerText = score;

        // Create Buttons Element
        const createButtonsContainer = document.createElement("div");

        const createDeleteButton = document.createElement("button");
        createDeleteButton.innerText = "del";
        createDeleteButton.setAttribute("id", "delete-btn");

        const incrementButton = document.createElement("button");
        incrementButton.innerText = "5+";
        incrementButton.setAttribute("id", "increment-btn");

        const decrementButton = document.createElement("button");
        decrementButton.innerText = "5-";
        decrementButton.setAttribute("id", "decrement-btn")

        //Appending buttons in button container
        createButtonsContainer.append(createDeleteButton, incrementButton, decrementButton)

        // Appending elements in record
        createRecord.append(createFullname, createCountry, createScore, createButtonsContainer);
        createRecord.classList.add("playerRecord")

        // Appending record in board
        board.append(createRecord)

        createButtonsContainer.addEventListener("click", (e) => {
    
            // const buttons = Array.from(createButtonsContainer.children);

            if(e.target.id === "delete-btn"){
                createDeleteButton.addEventListener("click", () => {

                })
                
            } else if(e.target.id === "increment-btn"){
                console.log("b");
                
            } else if(e.target.id === "decrement-btn"){
                console.log(("c"));
                
            }
            


            
            
        })
    })

}



form.addEventListener("submit", addPlayerHandler)


