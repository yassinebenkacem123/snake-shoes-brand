import { facebook, freeShipping, instagram, mobilePayment,twitter, welcomeHelp } from "../assets/icons";
import { bigShoe1,shoe9,shoe10,shoe11,shoe12,bigShoe2, bigShoe3, customer1, customer2, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3, product1, product2, product3, product4, product5 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: product1,
        name: "snake Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: product2,
        name: "snake Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: product3,
        name: "snake Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: product4,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
    {
        imgURL:product5,
        name:"snake Air mr-03",
        price:"$330",
    },
    {
        imgURL: shoe9,
        name: "snake morroco-10",
        price: "130.20",
    },
    {
        imgURL: shoe10,
        name: "snake morroco-11",
        price: "330.20",
    },
    
    {
        imgURL: shoe11,
        name: "adidas snake-1.0",
        price: "150.20",
    },
    
    {
        imgURL: shoe12,
        name: "snake-dragon morroco-1.4",
        price: "290.20",
    }
];

export const services = [
    {
        imgURL: freeShipping,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: mobilePayment,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: welcomeHelp,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Snake Waffle Racer", link: "/" },
            { name: "Snake Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@snake.com", link: "mailto:customer@snake.com" },
            { name: "+212 6554862354", link: "tel:+212 64862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];