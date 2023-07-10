const portal_button = document.getElementById('portal_button');

console.log("Test");

portal_button.addEventListener("click", (event) => {
    console.log("Test");
    window.location.href = 'http://my.marist.edu/';
});

/*

let judy = {firstName: "Judy", lastName: "Smith", link: "https://www.google.com"};
let brian = {firstName: "Brian", lastName: "Gormanly", link: "https://freeagora.org"};
let elle = {firstName: "Elle", link: "https://www.marist.edu"};

let myPeps = [judy, brian, elle];

window.addEventListener("load", () => {
    for(let i = 0; i < myPeps.length; i++) {
        displayFeed(myPeps[i]);
    }
});

function displayFeed(person) {
    let feed = document.getElementById('news_feed');
    feed.innerHTML += "<div>";
    feed.innerHTML += "<h1><a href='" + person.link + "'>" + person.firstName + "</a></h1>";
    feed.innerHTML += "<div>";
}

console.log(myPeps);

*/

let story1 = {
    title: "Marist Story 1",
    body: "This is the body of the story, it may be longer",
    linkURL: "",
    imageURL: "/images/hancock.jpeg"
}

let story2 = {
    title: "Marist Story 2",
    body: "This is the body of the story, it may be longer",
    linkURL: "",
    imageURL: "/images/news_pic.jpg"
}

let story3 = {
    title: "Marist Story 3",
    body: "This is the body of the story, it may be longer",
    linkURL: "",
    imageURL: "/images/campus.png"
}

currentStories = [story1, story2, story3];

window.addEventListener("load", () => {
    for (let i = 0; i < currentStories.length; i++) {
        displayItem(currentStories[i]);
    }
});

function displayItem(feedItem) {
    let feed = document.getElementById("news_feed");
    feed.innerHTML += "<div>";
    feed.innerHTML += "<img class = 'feedImage' src ='" + feedItem.imageURL + "'></img>";
    feed.innerHTML += "<a href = '" + feedItem.linkURL + "'>" + feedItem.title + "<a/>";
    feed.innerHTML += "<p>" + feedItem.body + "</p>";
    feed.innerHTML += "</div><hr>";
}