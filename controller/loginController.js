var localStorage = require('localStorage');
module.exports = {
    handleLogin: (req, res) => {
        var user = req.body.user;
        var pass = req.body.pass;
        if (user != undefined && user != '' && user != null) {
            if (user == 'hari@gmail.com' && pass == '123') {
                console.log('im verified')
                localStorage.setItem('sessionAuth','true')
                res.redirect('/home')
                
            }
            else {
                console.log('into error')
                res.render('error', { message: 'Invalid username or password' })
            }
        }
        handleLogout: (req, res) => {
            localstorage.removeItem('sessionAuth')
            res.redirect('/')
        }
    }
}
