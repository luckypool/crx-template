var Background = Class.create({
    initialize: function() {
        this.assignEventHandlers();
    },
    assignEventHandlers: function() {
        ...
    },
    getServerUrl: function() {
        return "http://backend.server.name/";
    },
    load***: function(callbacks) {
        var url = this.getServerUrl() + "ajax/get_***";
        new Ajax.Request(url, {
            method: "get",
            onSuccess: function(req) {
                callbacks.onSuccess(req);
            }.bind(this)
        });
    },
    get***Config: function() {
        var value = localStorage["***"];
        if (value) {
            return value;
        } else {
            return "初期値の値";
        }
    },
    set***Config: function(value) {
        localStorage["***"] = value;
    }
});

var bg = new Background();
