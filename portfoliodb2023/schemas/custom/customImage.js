
export default ({
    name: 'CustomImage',
    title: 'Custom Image',
    type: 'image',
    options: {
        hotspot: true
    },
    fields: [
    {
        name: 'Alt',
        title: 'Alt Text',
        type: 'string',
        description: 'Alt of the image',
        validation: Rule => Rule.error("Alt text is required").required(),
        options: {
            isHighlighted: true
        }
    },
    ]
})
        
