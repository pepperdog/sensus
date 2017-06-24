// Generated by CoffeeScript 1.12.4
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  AppSupport.SelfLoadingView = (function(superClass) {
    extend(SelfLoadingView, superClass);

    function SelfLoadingView() {
      this.loadTemplate = bind(this.loadTemplate, this);
      this.render = bind(this.render, this);
      return SelfLoadingView.__super__.constructor.apply(this, arguments);
    }

    SelfLoadingView.prototype.replaceRootElement = false;

    SelfLoadingView.prototype.render = function() {
      var elements, html;
      this.loadTemplate();
      if (this.model) {
        html = this.template(this.model.toJSON());
      } else {
        html = this.template();
      }
      if (this.replaceRootElement) {
        elements = jQuery.parseHTML(html);
        this.el = elements[0];
        this.$el = $(this.el);
      } else {
        this.$el.html = html;
      }
      return this;
    };

    SelfLoadingView.prototype.loadTemplate = function() {
      if (!this.template) {
        return $.ajax({
          url: this.scriptLocation.slice(0, -2) + "html",
          async: false,
          dataType: "text",
          success: (function(_this) {
            return function(data, status, xhr) {
              return _this.template = _.template(data);
            };
          })(this),
          error: (function(_this) {
            return function(xhr, status, error) {
              return console.log("AJAX Error: " + status);
            };
          })(this)
        });
      }
    };

    return SelfLoadingView;

  })(Backbone.View);

}).call(this);
