fetch('http://localhost:3000/characters')
.then((response) => {
    return response.json();
})
.then((data) => {
    data.characters.forEach((contestant) => {
        const imgElement = document.querySelector(`#${contestant.name.toLowerCase()} img`)
        imgElement.src = contestant.image;
    });
})
.catch((err) => {
    console.error(err)
});

function toggleDisplay(elementId) {
    let p =document.getElementById(elementId);
    if(p.style.display === "none") {
        p.style.display = "block";
    } else {
        p.style.display = "none"
    }

}

function increaseVoteByOne(contestantId) {
    let voteCount = 0;
    voteCount++;
    console.log('The ' + contestantId + ' votes! Current count: ' + voteCount);
}