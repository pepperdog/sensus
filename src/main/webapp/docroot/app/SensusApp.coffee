class Sensus.SensusApp extends AppSupport.SelfLoadingView

    navBar: null
    mainContent: null

    # Required for automatic template loading
    scriptLocation: AppSupport.scriptLocation()

    # Override
    initialize: (options) =>
        super(options)
        @navBar = new Sensus.NavBar
        @mainContent = new Sensus.MainContent

    # Override
    render: =>
        @$el.empty()
        @$el.append(@navBar.render())
        @$el.append(@mainContent.render())
        @$el
