import { Template } from 'meteor/templating';
import {UsersIger} from '../lib/collections.js' 
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

//pivot me ayuda a saber que cuadro mostrar si de Log in o Sign in

Template.mainViews.onCreated(function mainViewsOnCreated() {
  // pivot starts at true
  this.pivot = new ReactiveVar(true);
});

Template.mainViews.helpers({
  getPivot() {
    return Template.instance().pivot.get();
  },
  getProf(){
    return Template.instance().pivot.get();
  }
});

Template.mainViews.events({
  //signIn click button event
  'click .signIn':function(event, instance){
    instance.pivot.set(false);
  },
  //logIn click button event (First shown)
  'click .logIn':function(){
    //Get inputs value
    var getEmail = document.getElementById("emailTxtLI").value;
    var getPassword = document.getElementById("passwordTxtLI").value;
    //Query
    var resultado=UsersIger.find({email:getEmail},{password:getPassword}).fetch();
    //Objecto to string
    resultado=JSON.stringify(resultado)
    //Isolate the profession
    console.log(resultado);
    resultado=resultado.split(",");
    resultado=String(resultado[6]);
    resultado=resultado.split("}");
    resultado=resultado[0];
    resultado=resultado.substring(14);
    resultado=resultado.split('"');
    //resultado has the user's profession
    resultado=resultado[0];
    //Clear inputs 
    document.getElementById("emailTxtLI").value="";
    document.getElementById("passwordTxtLI").value="*******";
  },
  //register click button event
  'click .register': function(){
    //get input values
    var getEmail = document.getElementById("emailTxtSI").value;
    var getPassword = document.getElementById("passwordTxtSI").value;
    var getName = document.getElementById("nameTxt").value;
    var getLastName = document.getElementById("lastNameTxt").value;
    var getDpi = document.getElementById("dpiTxt").value;
    //get select value
    var getProfession = document.getElementById("professionSel").value;
    //Insert new user into collection
    UsersIger.insert({ 
      email: getEmail,
      password:getPassword,
      name:getName,
      lastName:getLastName,
      dpi:getDpi,
      profession:getProfession
    });
    //clear inputs and select box
    document.getElementById("emailTxtSI").value="";
    document.getElementById("passwordTxtSI").value="";
    document.getElementById("nameTxt").value="";
    document.getElementById("lastNameTxt").value="";
    document.getElementById("dpiTxt").value="";
    document.getElementById("professionSel").value="student";
  },
  //forgot click button event
  'click .forgot': function(){
    console.log("clicked forgot from sign up");
  },
  //logIn click button event (second shown)
  'click .logInSI':function(event, instance){
    console.log("clicked sign in from sign up");
    instance.pivot.set(true);
  }
});
