var friends = ["junie", "madelyn", "lucie", "salem", "maggie"];
var locations = ["my car", "a hut", "piggly wiggly", "ireland", "crazy caz boys", "saks", "dollar tree", "sugar shack", "hell", "a UFO"];
var weapons = ["rock", "paper", "scissors", "litter box", "potato", "firstGenerationIphone", "2012MacbookPro", "disposableCamera", "oneBirkenstock", "4ThousandFeathers", "alexa", "tikTokDanceMoves", "juulPod", "whatMomGotYouForXmas", "gasCap", "glassCleaner", "insultingGestures", "contextClues", "professionalDevelopment", "candleStick"];


document.addEventListener("DOMContentLoaded", function () {
    for (var i = 1; i < 101; i++) {
        var h3 = document.createElement("h3");
        h3.innerText = `Accusation ${i}`;
        document.body.appendChild(h3);
        var details = alertDetails(i);
        h3.addEventListener("click", details);
    }
});

function alertDetails(i) {
    return function () {
    alert(`Accusation ${i}: I accuse ${friends[i % friends.length]}, with the ${weapons[i % weapons.length]} in ${locations[i % locations.length]}`);
    }
}