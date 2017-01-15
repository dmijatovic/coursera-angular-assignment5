(function(){
'use strict'

angular.module('admin')
.service('userInfoSvc',[
    //dependencies
    '$http','ApiPath','$q',
    //main service function 
    userInfoSvc
]);

function userInfoSvc($http,ApiPath,$q){
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
        let path = ApiPath + '/menu_items/' + shortName + ".json"; 
        $http.get(path)
            .then((resp)=>{
                //resolve data
                q.resolve(resp.data);    
            })  
            .catch((err)=>{
                //reject 
                q.reject(err);
            })      
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