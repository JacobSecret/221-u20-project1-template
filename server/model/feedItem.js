function feedItem(title, body, linkUrl, imageUrl) {
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
    return this;
}
exports.createFeedItem = function createFeedItem() {
    return new feedItem();
}