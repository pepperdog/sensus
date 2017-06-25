
class AppSupport.SelfLoadingView extends Backbone.View

    # Subclasses must do this for auto template resolution
    #scriptLocation: AppSupport.scriptLocation()

    # We generally want to supply our own root element inside the html template
    replaceRootElement: true

    # override
    render: =>
        @loadTemplate()
        if @model
            html = @template(@model.toJSON())
        else
            html = @template()
        if @replaceRootElement
            elements = jQuery.parseHTML(html)
            @el = elements[0]
            @$el = $(@el)
        else
            @$el.html = html
        @$el


    loadTemplate: =>
        if !@template
            $.ajax
                url: @scriptLocation.slice(0, -2) + "html"
                async: false
                dataType: "text"
                success: (data, status, xhr) =>
                    @template = _.template(data)
                error: (xhr, status, error) =>
                    console.log("AJAX Error: #{status}")
        @