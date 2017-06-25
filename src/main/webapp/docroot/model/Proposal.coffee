class Sensus.Proposal extends Backbone.Model

class Sensus.Proposals extends Backbone.Collection
    model: Sensus.Proposal
    comparator: 'id'

    url: '/testdata/Proposals.json'