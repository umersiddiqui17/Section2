export default{
    name:'product',
    type:'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type:'string'
        },
        {
            name: 'description',
            title: 'Description',
            type:'text'
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
        },
        {
            name: 'quantity',
            title: 'Quantity',
            type: 'number'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [
                {
                    type: 'image'
                }
            ]
        },
        {
            name: 'category',
            title: 'Category',
            type:'reference',
            to: {
                type: 'category'
            }
        },
        {
            name:'slug',
            title: 'Slug',
            type:'slug',
            options: {source:'name'}
        },
        {
            name: 'createdAt',
            title: 'Created At',
            type: 'datetime'
        },
        {
            name:'approved',
            title:'Approved',
            type:'boolean',
            description:'Product will not be shown on the carousal if they are not approved'
        },
    ]
}