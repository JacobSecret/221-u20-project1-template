const express = require('express')
const app = express();
app.use(express.static('client/public'));

const feedController = require('./controller/feedController')



app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})

app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})

app.listen(1337, () => console.log('Listening on port 1337.'))

app.route('/api/feedItems')
    .get(feedController.getFeedItems)
    .post(feedController.saveFeedItem);

app.route('/api/feedItems/:feedItemId')
    .get(feedController.getFeedItem)
    .delete(feedController.deleteFeedItem)
    .patch(feedController.updateFeedItem)
    .put(feedController.updateFeedItem);