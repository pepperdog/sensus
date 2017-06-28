class Sensus.MainContent extends AppSupport.SelfLoadingView

    proposalList: null
    proposalView: null

    # Required for automatic template loading
    scriptLocation: AppSupport.scriptLocation()

    # Override
    initialize: (options) =>
        super(options)

    # Override
    render: =>
        super
        if !@proposalList
            @proposalList = new Sensus.ProposalList
            @$('#ProposalList').replaceWith(@proposalList.render())
            @proposalView = new Sensus.ProposalView
                proposalURL: '/testdata/SE-0180.html'
            @$('#ProposalView').replaceWith(@proposalView.render())
        @update()
        @$el

    update: =>
        @proposalList.$el.addClass("col-md-4")
        @proposalView.$el.addClass("col-md-8")
