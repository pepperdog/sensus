// Generated by CoffeeScript 1.12.4
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Sensus.ProposalView = (function(superClass) {
    extend(ProposalView, superClass);

    function ProposalView() {
      this.fetchProposal = bind(this.fetchProposal, this);
      this.update = bind(this.update, this);
      this.render = bind(this.render, this);
      this.initialize = bind(this.initialize, this);
      return ProposalView.__super__.constructor.apply(this, arguments);
    }

    ProposalView.prototype.scriptLocation = AppSupport.scriptLocation();

    ProposalView.prototype.proposalURL = null;

    ProposalView.prototype.proposal = null;

    ProposalView.prototype.initialize = function(options) {
      ProposalView.__super__.initialize.call(this, options);
      this.proposalURL = options.proposalURL;
      return this.fetchProposal();
    };

    ProposalView.prototype.render = function() {
      ProposalView.__super__.render.apply(this, arguments);
      this.$el.css('height', window.innerHeight + 'px');
      $(window).resize((function(_this) {
        return function() {
          return _this.$el.css('height', window.innerHeight + 'px');
        };
      })(this));
      return this.$el;
    };

    ProposalView.prototype.update = function() {
      var element;
      element = this.$('#ProposalList');
      element.empty();
      this.proposals.each((function(_this) {
        return function(proposal, index, list) {
          var cell;
          cell = new Sensus.ProposalCell({
            model: proposal
          });
          return element.append(cell.render());
        };
      })(this));
      return this.$el;
    };

    ProposalView.prototype.fetchProposal = function() {
      return jQuery.ajax(this.proposalURL, {
        dataType: "html",
        success: (function(_this) {
          return function(data, textStatus, jqXHR) {
            return _this.$('#ProposalView').html(data);
          };
        })(this),
        error: (function(_this) {
          return function(jqXHR, textStatus, errorThrown) {
            return console.log("error fetching proposal body " + errorThrown);
          };
        })(this)
      });
    };

    return ProposalView;

  })(AppSupport.SelfLoadingView);

}).call(this);
