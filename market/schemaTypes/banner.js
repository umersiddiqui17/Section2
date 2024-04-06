export default{
    name:"banner",
    title:"Banner",
    type:"document",
    fields:[
        {
            name: 'shopname',
            title: 'Name of the Shop',
            type:'string'
        },
        {
            name:"image",
            title:"Image",
            type:'image'
        },
        {
            name:'shopslug',
            title: 'Slug of The shop',
            type:'slug',
            options: {source:'shopname'}
        }
    ]
}