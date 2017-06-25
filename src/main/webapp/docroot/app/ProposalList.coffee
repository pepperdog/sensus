class Sensus.ProposalList extends AppSupport.SelfLoadingView

    # Required for automatic template loading
    scriptLocation: AppSupport.scriptLocation()

    proposals: null

    # Override
    initialize: (options) =>
        super(options)
        @proposals = new Sensus.Proposals
        @fetchProposals()

    # Override
    render: =>
        super
        @$el.css('height', window.innerHeight + 'px')
        $(window).resize =>
            @$el.css('height', window.innerHeight + 'px')
        @$el

    update: =>
        element = @$('#ProposalList')
        element.empty()
        @proposals.each (proposal, index, list) =>
            cell = new Sensus.ProposalCell
                model: proposal
            element.append(cell.render())
        @$el

    fetchProposals: =>
        @proposals.fetch
            success: (collection, response, options) =>
                console.log("Fetched Proposals: " + collection.length)
                @update()
            error: (collection, response, options) =>
                console.log("error fetching Proposals")
