var postSignUp=function(userId,info){
    console.log(userId);
    console.log(info.profile.profession);
    RadioNodeList.addUsersToRoles(userId,['normal-user',info.profile.profession])
}

AccountsTemplates.configue({
    postSignUpHook:postSignUp
});