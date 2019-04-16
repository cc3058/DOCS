import { Accounts } from 'meteor/accounts-base';



AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
  
    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',
});

AccountsTemplates.addFields([
    {
      _id:'profession',
      type: 'select',
      displayName: 'profession',
      select:[
        {
          text:'estudiante',
          value:'Student'
        },{
          text:'admin',
          value:'Admin'
        },{
          text:'voluntario',
          value:'Voluntary'
        },
        {
          text:'encargado',
          value:'Attendant'
        },{
            text:'other',
            value:'Other'
          
        }
      ],
      required:true
    }
  ])