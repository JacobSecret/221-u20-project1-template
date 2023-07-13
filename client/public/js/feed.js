const portal_button = document.getElementById('portal_button');

console.log("Test");

portal_button.addEventListener("click", (event) => {
    console.log("Test");
    window.location.href = 'http://my.marist.edu/';
});

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