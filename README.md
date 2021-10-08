# ECOassembly

website link here once deployed

## Project Description

ECOassembly is an ecommerce website designed to bring environmentally friendly products to consumers. Through a clean user interface and green color scheme, we attempt to convey a message of modern, simple, elegant products.

## Wireframes

Attached below are the wireframes for the screens to ECOassembly, as well as a component heirarchy showing how they all link together.

![image of layouts](https://media.discordapp.net/attachments/283876599626072064/896041918461526066/unknown.png?width=885&height=342)
![another image of layouts](https://media.discordapp.net/attachments/283876599626072064/896041975856398386/unknown.png?width=885&height=339)

## Component Heirarchy

![image of component heirarchy](https://media.discordapp.net/attachments/283876599626072064/896043289319456789/unknown.png?width=650&height=451)

## Schema

This is the schema that we will be using for all of our products in ECOassembly

```JavaScript

    const Product = New Schema(
        {
            name: { type: String, required: true },
            imgURL: { type: String, required: true},
            price: {type: String, required: true},
            description: {type: String, required: true},
            category: {type: String, required: true}
        },
        {timestamps:true}
    )

```

and this is the user schema that will be used

```JavaScript

    const User = new Schema(
        {
            username: {type: String,required: true},
            email: {type: String, required: true},
            password_digest: {type: String, required: true, select: false},
        },
        {timestamps: true}
    )

```

## Team Expectations

Attached is a link to a google doc where the group outlined expectations for the project. 

https://docs.google.com/document/d/1vhjM6TVd0_02vb96locR32oF6CUcGP8KcVf6Ldi2djM/edit

## Our Projects Board

Here, you'll find out github projects board that we will use throughout the project to keep track of who is doing what tasks, and when they're completed. 

https://github.com/LiamB93/eco-assembly/projects/1