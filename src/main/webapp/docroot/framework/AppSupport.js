
AppSupport = {

    scriptLocation: function() {
        var location = $('script').last().attr('src');
        //console.log("script location: " + location);
        return location;
    },

    // Unbelievable that I have to do this.
    // http://www.jquerybyexample.net/2012/02/remove-item-from-array-using-jquery.html
    removeObject: function(arr, itemtoRemove) {
        arr.splice($.inArray(itemtoRemove, arr),1);
    }
    
};
