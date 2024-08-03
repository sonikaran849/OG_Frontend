export const navigation = {
    categories: [
      {
        id: 'women',
        name: 'Women',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: '/',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', id:"top",
                href: `{women/clothing/top}` },
              { name: 'Dresses', id:"women_dress",
                href: '{women/clothing/women_dress}' }
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', id: 'mens_watches', 
                href: '{women/accessories/mens_watches}' },
              { name: 'Wallets', id: 'wallet',
                href: '{women/accessories/wallet}'
               },
              { name: 'Bags', id: 'bag',
                href: '{women/accessories/bag}'
              },
            ],
          },
        ],
      },
      {
        id: 'men',
        name: 'Men',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Oversized Tees', id: 'mens_tees' ,
              href: `{men/clothing/mens_tees}`},
              { name: 'Men Kurta', id: 'mens_kurta',
                href: `{men/clothing/mens_kurta}`
               },
              { name: 'Men Jeans', id: 'mens_jeans',
                href:  `{men/clothing/mens_jeans}`
               },
              { name: 'Sweaters', id: 'mens_sweater',
                href: `{men/clothing/mens_sweater}`
               },
              { name: 'Jackets', id: 'mens_jackets' ,
                href: `{men/clothing/mens_jackets}`
              },
              
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', id: 'mens_watches', 
                href: '{women/accessories/mens_watches}' }, 
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'Company', id: '/' },
      { name: 'Stores', id: '/' },
    ],
  }