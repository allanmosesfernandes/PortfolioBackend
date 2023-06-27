export default {
    name: 'CustomCode',
    title: 'Custom Code',
    type: 'object',
    fields: [
        {
            name: 'code',
            title: 'Code',
            type: 'code',
            options: {
               withFilename: true,
            }, 
        },
    ],
    preview: {
        select: {
            title: 'code.filename',
        },
    },
}
  