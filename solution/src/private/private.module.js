(function(){
'use strict'

let admin = angular.module('admin',['ui.router','common']);

//-----------------------------
// DEFINE constants
admin.constant('apiPath','https://davids-restaurant.herokuapp.com/')

//-----------------------------
// DEFINE ROUTES 
admin.config(routeConfig)
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('private', {
      absract: true,
      templateUrl: 'src/private/private-frame.html'
    })
    .state('private.home', {
      url: '/my-info',
      controller:'userInfoCtrl as user',
      templateUrl:'src/private/private.info.html'
    })
    .state('private.signup', {
      url: '/sign-up',
      controller:'signUpCtrl as signup',
      templateUrl:'src/private/private.signup.html'
    });
}

//---------------------------
//CONTROLLERS
admin.controller('userInfoCtrl',[
    //dependencies
    'userInfoSvc',
    //main function 
    userInfoCtrl
]);
function userInfoCtrl(userSvc){
    let user = this;
    
    //check if we have first name
    if (userSvc.cred.firstName==""){
        user.signed = false;
    }else{
        user.signed = true;
    }   
};

admin.controller('signUpCtrl',[
    //dependencies
    'userInfoSvc',
    //main function 
    signUpCtrl
]);
function signUpCtrl(userSvc){
    let signup = this;

    //copy values from the service 
    signup.firstName = userSvc.cred.firstName;
    signup.lastName = userSvc.cred.lastName;
    //default status 
    signup.status = "* fields are required.";

    //submit info 
    signup.submit = function(){

        //console.log("Submited by...",signup.firstName);
        let cred={
            firstName: signup.firstName,
            lastName: signup.lastName,
            email: signup.email,
            phone: signup.phone,
            favDish: signup.favDish
        }
        //
        signup.status = "Checking you favorite dish....";
        //pass to service 
        userSvc.checkDish(signup.favDish)
            .then((resp)=>{
                //if get response - save user 
                userSvc.signUp(cred);
                //communicate
                signup.status = "Your information has been saved!";
                signup.favDishMsg = undefined;
            })
            .catch((err)=>{
                //dish not exists 
                signup.favDishMsg="No such menu number exist. Please check code of your favorite dish.";
                signup.status = "Request failed :-(";
            });
    }

};

})();