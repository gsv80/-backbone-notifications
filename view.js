const NotifyView = Backbone.View.extend({
    tagName: "li",      
    template: _.template($('#notify-template').html()),

    initialize: function(){ 
        this.listenTo(this.model, 'destroy', this.remove);
    },
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    events: {
        'click .destroy' : 'destroy',
    },
    
    destroy: function(){
        this.model.destroy();
    },
                
});

const NotifyListView = Backbone.View.extend({
    
    render: function(){
        let self = this;
        this.model.each(function(notify){
            let notifyView = new NotifyView( {model: notify} );
            self.$el.append(notifyView.render().$el)
        });
        return this;
    },

    initialize : function(){
        this.listenTo(notifies, 'add', this.refresh);
        
    },
    refresh: function(){
    console.log('#### refresh'); 
    $('#notifies-list').html('');
    this.render();
    },

});   

const NotifiesView = Backbone.View.extend({

    template: _.template($('#header-template').html()),

    render: function(){
        this.$('#newNotifies').html((notifies.unread().length)==0 ? '': notifies.unread().length);
        return this;
    },
    
    initialize: function(){
        this.$el.html(this.template());
        this.listenTo(notifies, 'all', this.render);
            
    },
    
    events: { 
        'click #notifyBell' : 'toggleNotifies', 
    },
    
    toggleNotifies: function(){
        console.log('bell clicked');
        tgl=!tgl;
        if (tgl){
            $('#notifies-list').removeClass('hide');
        } else  $('#notifies-list').addClass('hide');
        this.render();
    },        

});

let tgl=false;


let notifiesView = new NotifiesView({ el: "#header" });
let notifyListView = new NotifyListView({ el: "#notifies-list", model: notifies });


notifyListView.render();