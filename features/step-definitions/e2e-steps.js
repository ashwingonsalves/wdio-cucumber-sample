const { Given, When, Then } = require('cucumber');

Given('I visit the login page', function() {
    browser.url('https://the-internet.herokuapp.com/login')
})

When('I submit invalid credentials', function() {
    $('#username').waitForExist()
    $('#username').setValue('invalidUser')
    $('#password').waitForExist()
    $('#password').setValue('invalidPass')
})

Then('I confirm that the login fails', function() {
    $('button[type = "submit"]').click()
    $('.flash.error').waitForExist()
})

When('I submit valid credentials', function() {
    $('#username').waitForExist()
    $('#username').setValue('tomsmith')
    $('#password').waitForExist()
    $('#password').setValue('SuperSecretPassword!')
})

Then('I confirm that the login is a success', function() {
    $('button[type = "submit"]').click()
    $('.flash.success').waitForExist()
})
