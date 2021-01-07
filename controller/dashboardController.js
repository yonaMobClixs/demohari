var request = require('request')
var localStorage = require('localStorage');
module.exports = {
    handleDashboard: (req, res) => {
        if (localStorage.getItem('sessionAuth') == 'true') {
            console.log('into method')
            options = {
                url: 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-05&sortBy=publishedAt&apiKey=378177d6a7c948d2a4e0ab9d1f9cfc00',
                method: 'GET'
            }
            request(options, (error, response, body) => {
                var data = JSON.parse(body)
                var top5 = ''
                for (var i = 0; i < 5; i++) {
                    top5 += '   :::    ' + data['articles'][i]['title'];
                }
                console.log('i am here')
                console.log('changed after git code')
                // console.log(top5)
                res.render('newsOlic24', { data: data.articles, top5News: top5 })
            })
        }
    }

}
