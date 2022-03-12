    // ---------------
    // -- Model--
    // -----------    

    const Notify = Backbone.Model.extend({
        defaults: {
            title: '',
            notify: '',
            unread : true,
        }
    });
      
    
    // -- Collection --

    const Notifies = Backbone.Collection.extend({
        model: Notify,
        localStorage: new Store("backbone-notifies"),
        unread: function(){
            return this.where({unread: true})
        }, 
    });
 
    // instance of the Collection
    let notifies = new Notifies();
