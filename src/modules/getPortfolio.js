import { ref } from 'vue'

import image1 from '@/assets/billede1.png'
import image2 from '@/assets/billede2.png'
import image3 from '@/assets/billede3.png'
import image4 from '@/assets/billede4.jpeg'
import image5 from '@/assets/billede5.png'
import image6 from '@/assets/billede6.png'
import image7 from '@/assets/billede7.png'




const getportfolioItems = () => {

    const portfolioItems = ref([

        {
            id: 1,
            title: 'Projekt 1',
            description: 'Reklamematriale for https://www.deluxecovers.dk',
            image: image1,
            category: 'web'

        },
        {
            id: 2,
            image: image2,
            title: 'Porjekt 2',
            description: 'Reklamematriale for https://www.deluxecovers.dk',
            category: 'photo',
        },
        {
            id: 3,
            image: image3,
            title: 'Porjekt 3',
            description: 'Reklamematriale for https://www.deluxecovers.dk',
        },
        {
            id: 4,
            image: image4,
            title: 'Porjekt 4',
            description: 'E-mail matriale for https://www.deluxecovers.dk',
        },
        {
            id: 5,
            image: image5,
            title: 'Porjekt 5',
            description: 'Poster projekt omkring generation Z',
        }, 
        {
            id: 6,
            image: image6,
            title: 'Porjekt 6',
            description: 'Design af app til UX',
        },
        {
            id: 7,
            image: image7,
            title: 'Porjekt 7',
            description: 'Design af Trapholt hjemmeside til 1 semester',
        },
      
    ]) 
    return { portfolioItems }
}

export default getportfolioItems