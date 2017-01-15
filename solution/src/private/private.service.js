(function(){
'use strict'

angular.module('admin')
.service('userInfoSvc',[
    //dependencies
    '$http','apiPath','$q',
    //main service function 
    userInfoSvc
]);

function userInfoSvc($http,apiPath,$q){
    let userSvc = this;

    //create cred object 
    userSvc.cred={
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        favDish:''
    };
    userSvc.status=""
    //create request
    userSvc.checkDish = function(shortName){
        let q = $q.defer();

        //simulate asinc
        setTimeout(()=>{
            q.resolve(true);
            //q.reject("This is not possible");
        },1000);

        return q.promise;
    } 
    //signup user 
    userSvc.signUp = function(userCred){
        //save data 
        userSvc.cred = userCred;
        //log this 
        console.log("Sign up...",userCred);
    }
}

})();