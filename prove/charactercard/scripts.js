
const monster = {
    name: "Abominable Croc",
    monsterClass: "Water Mutant",
    level: 5,
    HP: 100,
    image: 'croc.wepb',
    attacked: function() {
        this.HP = this.HP - 20
        if (this.HP <= 0) {this.HP = 0}
    },
    levelUp: function() {
        this.level = this.level + 1
        this.HP = 100
    }
}

let docImage = document.querySelector("img");
docImage.src = "croc.webp";
docImage.alt = "Crocodile Man";

let docName = document.querySelector("h3")
docName.textContent = monster.name

document.getElementById("attack").addEventListener('click', (event) => {
    monster.attacked()
    buildStats()
    if (monster.HP === 0) {window.alert("The monster is dead.")}
});

document.getElementById("level-up").addEventListener('click', (event) => {
    monster.levelUp()
    buildStats()
})

function buildStats() {
    document.querySelector(".statbox").innerHTML = `<p><strong>Class:</strong> ${monster.monsterClass}</p>
        <p class="level"><strong>Level:</strong> ${monster.level}</p>
        <p class="health"><strong>Health:</strong> ${monster.HP}</p>`
}

buildStats()