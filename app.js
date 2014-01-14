App = Ember.Application.create();

App.ApplicationRoute = Ember.Route.extend({
	actions: {
		openModal: function(modalName, model) {
			this.controllerFor(modalName).set('model',model);
			return this.render(modalName, {
				into: 'application',
				outlet: 'modal'
			});
		},

		closeModal: function() {
			return this.disconnectOutlet({
				outlet: 'modal',
				parentView: 'application'
			});
		}
	}
});

App.IndexRoute = Ember.Route.extend({
	model: function() {
		return Em.Object.create({name: 'Bernard'});   
	}
});

App.ModalController = Ember.ObjectController.extend({
	actions: {
		close: function() {
			return this.send('closeModal');   
		} 
	}
});

App.ModalDialogComponent = Ember.Component.extend({
	actions: {
		close: function() {
			return this.sendAction();   
		}
	}
});

