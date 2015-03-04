AccountsTemplates.configureRoute('signIn', {
    name: 'signin', //this is the name you should use as your pathFor helper
    path: 'signin', //this route will be forwarded to iron router so you don't have to define the same route in iron router
    template: 'signInTemplate', //this is the template that contains the {{> atForm} handlebar
    // layoutTemplate: 'masterLayout', //optional if you have a master layout
    redirect: 'userProfile' // this is the URL the user will be redirected upon sign in but you have to define this route in iron router
});