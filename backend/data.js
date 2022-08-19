import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name:'TrongCuong',
            email:'admin@example.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin: true,
        },
        {
            name:'Tan',
            email:'user@example.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin: false,
        },
    ],
    
    products: [
        {
            
            name: 'Zeus',
            category:'Shirts',
            image: '/images/1.jpg',
            price: 215,
            countInStock: 10,
            brand: 'teeworld',
            rating:4.5,
            numReviews:10,
            description:'chat luong cao',

        },
        {
            name: 'Sai Gon',
            category:'Shirts',
            image: '/images/2.jpg',
            price: 115,
            countInStock: 20,
            brand: 'teeworld',
            rating:4.0,
            numReviews:14,
            description:'chat luong cao',

        },
        {
        
            name: 'The Childhoods',
            category:'Shirts',
            image: '/images/3.jpg',
            price: 175,
            countInStock: 0,
            brand: 'teeworld',
            rating:3.0,
            numReviews:12,
            description:'chat luong cao',

        },
        {
           
            name: ' Teddy Bear',
            category:'Shirts',
            image: '/images/4.jpg',
            price: 275,
            countInStock: 15,
            brand: 'teeworld',
            rating:3.5,
            numReviews:16,
            description:'chat luong cao',

        },
        {
            
            name: 'Coffin Dance',
            category:'Shirts',
            image: '/images/5.jpg',
            price: 250,
            countInStock: 5,
            brand: 'teeworld',
            rating:4.5,
            numReviews:13,
            description:'chat luong cao',

        },
        {
           
            name: 'Lion Dance',
            category:'Shirts',
            image: '/images/6.jpg',
            price: 200,
            countInStock: 12,
            brand: 'teeworld',
            rating:5,
            numReviews:17,
            description:'chat luong cao',

        },
        {
           
            name: 'Cerberus',
            category:'Shirts',
            image: '/images/7.jpg',
            price: 305,
            countInStock: 10,
            brand: 'teeworld',
            rating:4.5,
            numReviews:20,
            description:'chat luong cao',

        },
        {
            
            name: 'Apollo',
            category:'Shirts',
            image: '/images/8.jpg',
            price: 350,
            countInStock: 0,
            brand: 'teeworld',
            rating:4.5,
            numReviews:34,
            description:'chat luong cao',

        },
      
   
     
    ]
}
export default data;