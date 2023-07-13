const feedItem = require('../model/feedItem');

const feedItem1 = feedItem.createFeedItem();
const feedItem2 = feedItem.createFeedItem();
const feedItem3 = feedItem.createFeedItem();

let feedItems = [feedItem1, feedItem2, feedItem3];

// Returns every feed item. //
exports.getFeedItems = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
	res.send(feedItems);
}

// Creates a new feed item from the attributes of parameter req, and saves it in the feedItems aray. //
exports.saveFeedItem = function (req, res) {
	let newFeedItem = feedItem.createFeedItem(req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl);
	feedItems.push(newFeedItem);
	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems);
}

// Fetches an item from the feed by using an index number defined in parameter req. //
exports.getFeedItem = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  	res.send(feedItems[req.params.feedItemId]);
}

// Removes a specified object from the array of feed items. //
exports.deleteFeedItem = function(req, res) {
	console.log('deleting item');
	feedItems.splice(req.params.feedItemId, 1);
	console.log('deleted item');
	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems);
}

// Changes the content of a feed item. //
exports.updateFeedItem = function(req, res) {
	var updatedFeedItem = feedItems[req.params.feedItemId];
	
	console.log(req.body.title);
	if(req.body.title)
		updatedFeedItem.title = req.body.title;
	if(req.body.body)
		updatedFeedItem.body = req.body.body;
	if(req.body.linkUrl)
		updatedFeedItem.linkUrl = req.body.linkUrl;
	if(req.body.imageUrl)
		updatedFeedItem.imageUrl = req.body.imageUrl;

	feedItems[req.params.feedItemId] = updatedFeedItem;

	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems[req.params.feedItemId]);
}