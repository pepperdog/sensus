class Sensus.ProposalCell extends AppSupport.SelfLoadingView

    # Required for automatic template loading
    scriptLocation: AppSupport.scriptLocation()

    # Override
    render: =>
        super
        @$('#ProposalNumber').html(@model.get('issue_number'))
        @$('#ProposalTitle').html(@model.get('title'))
        @$el
