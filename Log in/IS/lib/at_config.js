import { Accounts } from 'meteor/accounts-base';

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
      ]
    }
  ])