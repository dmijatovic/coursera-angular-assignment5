(function(){
'use strict'

angular.module('admin')
.component('dv4UserInfo',{
    controller:dv4UserInfoCtrl,
    template:`
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Welkom {{$ctrl.cred.firstName}}</h3>
            </div>
            
            <table class="table" style="color:#333333;">
                <tr><th>First name</th><td>{{$ctrl.cred.firstName}}</td></tr>
                <tr><th>Last name</th><td>{{$ctrl.cred.lastName}}</td></tr>
                <tr><th>Email</th><td>{{$ctrl.cred.email}}</td></tr>
                <tr><th>Phone</th><td>{{$ctrl.cred.phone}}</td></tr>
            </table>

            <div class="panel-body">
                <p class="well">Your favorite dish is: {{$ctrl.cred.favDish}}</p>
            </div>
        </div>
    `
});
//inject userInfoSvc service
dv4UserInfoCtrl.$inject=['userInfoSvc'];
//component controller
function dv4UserInfoCtrl(userSvc){
    let $ctrl = this;
    //copy credentials
    $ctrl.cred = userSvc.cred;
}

})();