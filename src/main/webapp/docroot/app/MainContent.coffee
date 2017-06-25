class Sensus.MainContent extends AppSupport.SelfLoadingView

    proposalList: null

    # Required for automatic template loading
    scriptLocation: AppSupport.scriptLocation()

    # Override
    initialize: (options) =>
        super(options)
        @proposalList = new Sensus.ProposalList()


    # Override
    render: =>
        super
        @$el.append(@proposalList.render())
