export default {
    name: 'featured',
    title: 'Featured',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'blog',
            title: 'Featured Blogs',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'Blog' }] }],
            //ensure that the array is unique and atleast one blog is selected
            validation: Rule => Rule.unique().min(1)
            
        },
        {
            name: 'categories',
            title: 'Featured Categories',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'Blog' }] }],
            //ensure that the array is unique and atleast one blog is selected
            validation: Rule => Rule.unique().min(1)
            
        },
    ]   
}
