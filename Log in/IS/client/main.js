import { Template } from 'meteor/templating';
import './main.html';
import { Accounts } from 'meteor/accounts-base';
import '../lib/at_config.js';

Template.body.helpers({
	notes(){
		return Notes.find();
	} 
 });
 
 Template.add.events({
	'submit .add-form': function(){
		event.preventDefault();
		const target = event.target;
		const text = target.text.event;
		Notes.insert({
			text,
			ceratedAt: new Date()
		});	
		target.text.value='';
		return false
	}
 });
 
 Template.note.events({
	'click .delete-note':function(){
		Notes.remove(this._id);
		return false;
	} 
 });