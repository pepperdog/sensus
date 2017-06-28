class Sensus.ProposalView extends AppSupport.SelfLoadingView

    # Required for automatic template loading
    scriptLocation: AppSupport.scriptLocation()

    proposalURL: null
    proposal: null

    # Override
    initialize: (options) =>
        super(options)
        @proposalURL = options.proposalURL
        @fetchProposal()

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

    fetchProposal: =>
        jQuery.ajax @proposalURL,
            dataType: "html"
            success: (data, textStatus, jqXHR) =>
                @$('#ProposalView').html(data)
            error: (jqXHR, textStatus, errorThrown) =>
                console.log("error fetching proposal body " + errorThrown)
