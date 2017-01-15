(function(){
'use strict'

angular.module('admin')
.component('dv4UserInfo',{
    controller:dv4UserInfoCtrl,
    template:`
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Welcome {{$ctrl.cred.firstName}}</h3>
            </div>
            
            <table class="table" style="color:#333333;">
                <tr><th>First name</th><td>{{$ctrl.cred.firstName}}</td></tr>
                <tr><th>Last name</th><td>{{$ctrl.cred.lastName}}</td></tr>
                <tr><th>Email</th><td>{{$ctrl.cred.email}}</td></tr>
                <tr><th>Phone</th><td>{{$ctrl.cred.phone}}</td></tr>
                <tr><th>Your favourite dish</th><td>
                    <menu-item 
                        menu-item="$ctrl.cred.favDish">
                    </menu-item>
                </td></tr>
            </table>

            <div class="panel-body">
                <!-- here nothing -->
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