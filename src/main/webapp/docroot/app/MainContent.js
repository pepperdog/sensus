// Generated by CoffeeScript 1.12.4
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Sensus.MainContent = (function(superClass) {
    extend(MainContent, superClass);

    function MainContent() {
      this.update = bind(this.update, this);
      this.render = bind(this.render, this);
      this.initialize = bind(this.initialize, this);
      return MainContent.__super__.constructor.apply(this, arguments);
    }

    MainContent.prototype.proposalList = null;

    MainContent.prototype.proposalView = null;

    MainContent.prototype.scriptLocation = AppSupport.scriptLocation();

    MainContent.prototype.initialize = function(options) {
      return MainContent.__super__.initialize.call(this, options);
    };

    MainContent.prototype.render = function() {
      MainContent.__super__.render.apply(this, arguments);
      if (!this.proposalList) {
        this.proposalList = new Sensus.ProposalList;
        this.$('#ProposalList').replaceWith(this.proposalList.render());
        this.proposalView = new Sensus.ProposalView({
          proposalURL: '/testdata/SE-0180.html'
        });
        this.$('#ProposalView').replaceWith(this.proposalView.render());
      }
      this.update();
      return this.$el;
    };

    MainContent.prototype.update = function() {
      this.proposalList.$el.addClass("col-md-4");
      return this.proposalView.$el.addClass("col-md-8");
    };

    return MainContent;

  })(AppSupport.SelfLoadingView);

}).call(this);
