// Import category images
import dogCategoryImg from '../assets/PetCategories/DogCategory.webp';
import catCategoryImg from '../assets/PetCategories/CatCategory.webp';
import birdsCategoryImg from '../assets/PetCategories/BirdsCategory.webp';
import fishCategoryImg from '../assets/PetCategories/FishCategory.avif';
import reptileCategoryImg from '../assets/PetCategories/ReptileCategory.webp';
import smallAnimalCategoryImg from '../assets/PetCategories/SmallAnimalCategory.webp';

// Import product images
import dogFoodImg from '../assets/PetProducts/DogFood.avif';
import dogToyImg from '../assets/PetProducts/DogToy.webp';
import catFoodImg from '../assets/PetProducts/CatFood.avif';
import catLitterImg from '../assets/PetProducts/CatLitter.avif';
import reptFoodImg from '../assets/PetProducts/ReptFood.webp';
import smallAnimalTreatsImg from '../assets/PetProducts/SmallAnimalTreats.webp';

// ============ PET CATEGORIES ============
export const petCategories = [
  {
    id: 1,
    name: 'Dogs',
    slug: 'dogs',
    icon: '🐕',
    image: dogCategoryImg,
    description: 'Loyal companions for every family',
    tagline: 'Man\'s best friend awaits you',
    count: '50+ breeds available',
    careHighlights: ['Daily exercise', 'Regular grooming', 'Social interaction'],
    popularBreeds: ['Golden Retriever', 'Labrador', 'German Shepherd', 'Poodle']
  },
  {
    id: 2,
    name: 'Cats',
    slug: 'cats',
    icon: '🐱',
    image: catCategoryImg,
    description: 'Independent and affectionate friends',
    tagline: 'Find your purr-fect companion',
    count: '40+ breeds available',
    careHighlights: ['Litter training', 'Indoor safety', 'Play time'],
    popularBreeds: ['Persian', 'Siamese', 'Maine Coon', 'British Shorthair']
  },
  {
    id: 3,
    name: 'Birds',
    slug: 'birds',
    icon: '🦜',
    image: birdsCategoryImg,
    description: 'Colorful and musical companions',
    tagline: 'Add melody to your home',
    count: '30+ species available',
    careHighlights: ['Spacious cage', 'Fresh food daily', 'Mental stimulation'],
    popularBreeds: ['Parakeet', 'Cockatiel', 'Lovebird', 'Canary']
  },
  {
    id: 4,
    name: 'Fish',
    slug: 'fish',
    icon: '🐠',
    image: fishCategoryImg,
    description: 'Beautiful aquatic pets for your home',
    tagline: 'Bring tranquility home',
    count: '100+ varieties available',
    careHighlights: ['Water quality', 'Proper filtration', 'Regular feeding'],
    popularBreeds: ['Goldfish', 'Betta', 'Guppy', 'Angelfish']
  },
  {
    id: 5,
    name: 'Reptiles',
    slug: 'reptiles',
    icon: '🦎',
    image: reptileCategoryImg,
    description: 'Fascinating exotic companions',
    tagline: 'Experience the extraordinary',
    count: '25+ species available',
    careHighlights: ['Temperature control', 'Proper habitat', 'Specific diet'],
    popularBreeds: ['Bearded Dragon', 'Leopard Gecko', 'Ball Python', 'Red-Eared Slider']
  },
  {
    id: 6,
    name: 'Small Animals',
    slug: 'small-animals',
    icon: '🐹',
    image: smallAnimalCategoryImg,
    description: 'Cute and cuddly pocket pets',
    tagline: 'Small size, big personality',
    count: '20+ varieties available',
    careHighlights: ['Clean bedding', 'Fresh vegetables', 'Exercise wheel'],
    popularBreeds: ['Hamster', 'Guinea Pig', 'Rabbit', 'Chinchilla']
  }
];

// ============ COUPON CONFIGURATION ============
export const couponConfig = {
  validCoupon: 'PETADOPT2024',
  description: 'Pet adoption coupon for Bangladesh - 2024'
};
// ============ AVAILABLE PETS FOR ADOPTION ============
export const availablePets = {
  Dogs: [
    {
      id: 1,
      name: 'Max',
      breed: 'Golden Retriever',
      age: '2 years',
      sex: 'Male',
      hairLength: 'Long',
      size: 'Up to 58cm',
      weight: 'Up to 32kg',
      price: 'Negotiable',
      hiddenPrice: 35000,
      description: 'Friendly and energetic, great with kids',
      personality: ['Playful', 'Loyal', 'Gentle'],
      vaccinated: true,
      trained: true,
      imagePlaceholder: '🐕',
      type: 'animal'
    },
    {
      id: 2,
      name: 'Bella',
      breed: 'Labrador',
      age: '1 year',
      sex: 'Female',
      hairLength: 'Short',
      size: 'Up to 55cm',
      weight: 'Up to 30kg',
      price: 'Negotiable',
      hiddenPrice: 30000,
      description: 'Sweet and affectionate family dog',
      personality: ['Friendly', 'Active', 'Smart'],
      vaccinated: true,
      trained: false,
      imagePlaceholder: '🦮',
      type: 'animal'
    },
    {
      id: 3,
      name: 'Rocky',
      breed: 'German Shepherd',
      age: '3 years',
      sex: 'Male',
      hairLength: 'Medium',
      size: 'Up to 65cm',
      weight: 'Up to 40kg',
      price: 'Negotiable',
      hiddenPrice: 40000,
      description: 'Intelligent and protective companion',
      personality: ['Brave', 'Confident', 'Loyal'],
      vaccinated: true,
      trained: true,
      imagePlaceholder: '🐕‍🦺',
      type: 'animal'
    },
    {
      id: 4,
      name: 'Luna',
      breed: 'Sheepadoodle',
      age: '1.5 years',
      sex: 'Female',
      hairLength: 'Long',
      size: 'Up to 55cm',
      weight: 'Up to 30kg',
      price: 'Negotiable',
      hiddenPrice: 32500,
      description: 'Gentle and intelligent, perfect family companion',
      personality: ['Friendly', 'Smart', 'Affectionate'],
      vaccinated: true,
      trained: true,
      imagePlaceholder: '🐕',
      type: 'animal'
    }
  ],
  Cats: [
    {
      id: 5,
      name: 'Whiskers',
      breed: 'Persian',
      age: '1.5 years',
      sex: 'Male',
      hairLength: 'Long',
      size: 'Up to 30cm',
      weight: 'Up to 5.5kg',
      price: 'Negotiable',
      hiddenPrice: 20000,
      description: 'Calm and loving indoor cat',
      personality: ['Gentle', 'Quiet', 'Affectionate'],
      vaccinated: true,
      trained: true,
      imagePlaceholder: '🐱',
      type: 'animal'
    },
    {
      id: 6,
      name: 'Mittens',
      breed: 'Siamese',
      age: '2 years',
      sex: 'Female',
      hairLength: 'Short',
      size: 'Up to 25cm',
      weight: 'Up to 4kg',
      price: 'Negotiable',
      hiddenPrice: 17500,
      description: 'Vocal and social, loves attention',
      personality: ['Talkative', 'Social', 'Playful'],
      vaccinated: true,
      trained: true,
      imagePlaceholder: '🐈',
      type: 'animal'
    },
    {
      id: 7,
      name: 'Oliver',
      breed: 'Maine Coon',
      age: '1 year',
      sex: 'Male',
      hairLength: 'Long',
      size: 'Up to 40cm',
      weight: 'Up to 8kg',
      price: 'Negotiable',
      hiddenPrice: 25000,
      description: 'Large and friendly gentle giant',
      personality: ['Friendly', 'Gentle', 'Intelligent'],
      vaccinated: true,
      trained: true,
      imagePlaceholder: '🐈‍⬛',
      type: 'animal'
    },
    {
      id: 8,
      name: 'Shadow',
      breed: 'British Shorthair',
      age: '3 years',
      sex: 'Male',
      hairLength: 'Short',
      size: 'Up to 35cm',
      weight: 'Up to 6kg',
      price: 'Negotiable',
      hiddenPrice: 15000,
      description: 'Independent and calm, perfect lap cat',
      personality: ['Calm', 'Independent', 'Affectionate'],
      vaccinated: true,
      trained: true,
      imagePlaceholder: '🐱',
      type: 'animal'
    }
  ],
  Birds: [
    {
      id: 9,
      name: 'Tweety',
      breed: 'Parakeet',
      age: '6 months',
      sex: 'Female',
      tameStatus: 'Hand-tame',
      size: 'Up to 18cm',
      price: 'Negotiable',
      hiddenPrice: 5000,
      description: 'Colorful and cheerful singer',
      personality: ['Cheerful', 'Social', 'Vocal'],
      vaccinated: true,
      trained: false,
      imagePlaceholder: '🦜',
      type: 'animal'
    },
    {
      id: 10,
      name: 'Sunny',
      breed: 'Cockatiel',
      age: '1 year',
      sex: 'Male',
      tameStatus: 'Tame',
      size: 'Up to 32cm',
      price: 'Negotiable',
      hiddenPrice: 12500,
      description: 'Friendly and loves to whistle',
      personality: ['Friendly', 'Musical', 'Affectionate'],
      vaccinated: true,
      trained: true,
      imagePlaceholder: '🐦',
      type: 'animal'
    },
    {
      id: 11,
      name: 'Polly',
      breed: 'Lovebird',
      age: '8 months',
      sex: 'Female',
      tameStatus: 'Hand-tame',
      size: 'Up to 15cm',
      price: 'Negotiable',
      hiddenPrice: 10000,
      description: 'Affectionate and colorful pet',
      personality: ['Loving', 'Playful', 'Social'],
      vaccinated: true,
      trained: false,
      imagePlaceholder: '🦚',
      type: 'animal'
    },
    {
      id: 12,
      name: 'Rio',
      breed: 'Canary',
      age: '4 months',
      sex: 'Unverified',
      tameStatus: 'Untame',
      size: 'Up to 12cm',
      price: 'Negotiable',
      hiddenPrice: 7500,
      description: 'Beautiful singer with melodious voice',
      personality: ['Musical', 'Independent', 'Peaceful'],
      vaccinated: true,
      trained: false,
      imagePlaceholder: '🐦',
      type: 'animal'
    }
  ],
  Fish: [
    {
      id: 13,
      name: 'Goldie',
      breed: 'Goldfish',
      age: '3 months',
      length: 'Up to 8cm',
      waterType: 'Freshwater',
      tankSize: 'Minimum 40L',
      price: 'Negotiable',
      hiddenPrice: 1500,
      description: 'Classic orange goldfish',
      personality: ['Peaceful', 'Hardy', 'Easy-care'],
      vaccinated: false,
      trained: false,
      imagePlaceholder: '🐠',
      type: 'animal'
    },
    {
      id: 14,
      name: 'Fin',
      breed: 'Betta Fish',
      age: '4 months',
      length: 'Up to 6cm',
      waterType: 'Freshwater',
      tankSize: 'Minimum 20L',
      price: 'Negotiable',
      hiddenPrice: 2500,
      description: 'Beautiful flowing fins',
      personality: ['Territorial', 'Colorful', 'Active'],
      vaccinated: false,
      trained: false,
      imagePlaceholder: '🐟',
      type: 'animal'
    },
    {
      id: 15,
      name: 'Angel',
      breed: 'Angelfish',
      age: '5 months',
      length: 'Up to 15cm',
      waterType: 'Freshwater',
      tankSize: 'Minimum 75L',
      price: 'Negotiable',
      hiddenPrice: 3500,
      description: 'Elegant freshwater fish',
      personality: ['Graceful', 'Peaceful', 'Beautiful'],
      vaccinated: false,
      trained: false,
      imagePlaceholder: '🐡',
      type: 'animal'
    },
    {
      id: 16,
      name: 'Nemo',
      breed: 'Clownfish',
      age: '6 months',
      length: 'Up to 11cm',
      waterType: 'Saltwater',
      tankSize: 'Minimum 100L',
      price: 'Negotiable',
      hiddenPrice: 4000,
      description: 'Vibrant orange and white striped beauty',
      personality: ['Active', 'Hardy', 'Colorful'],
      vaccinated: false,
      trained: false,
      imagePlaceholder: '🐠',
      type: 'animal'
    }
  ],
  Reptiles: [
    {
      id: 17,
      name: 'Spike',
      breed: 'Bearded Dragon',
      age: '1 year',
      sex: 'Male',
      length: 'Up to 45cm',
      temperature: '35-40°C basking spot',
      diet: 'Omnivore',
      price: 'Negotiable',
      hiddenPrice: 20000,
      description: 'Docile and easy to handle',
      personality: ['Calm', 'Friendly', 'Curious'],
      vaccinated: false,
      trained: false,
      imagePlaceholder: '🦎',
      type: 'animal'
    },
    {
      id: 18,
      name: 'Scales',
      breed: 'Ball Python',
      age: '2 years',
      sex: 'Female',
      length: 'Up to 120cm',
      temperature: '26-32°C',
      diet: 'Carnivore',
      price: 'Negotiable',
      hiddenPrice: 25000,
      description: 'Gentle snake, great for beginners',
      personality: ['Docile', 'Calm', 'Easy-care'],
      vaccinated: false,
      trained: false,
      imagePlaceholder: '🐍',
      type: 'animal'
    },
    {
      id: 19,
      name: 'Tank',
      breed: 'Red-Eared Slider',
      age: '1.5 years',
      sex: 'Male',
      length: 'Up to 28cm',
      temperature: '24-28°C water',
      diet: 'Omnivore',
      price: 'Negotiable',
      hiddenPrice: 10000,
      description: 'Active aquatic turtle',
      personality: ['Active', 'Curious', 'Long-lived'],
      vaccinated: false,
      trained: false,
      imagePlaceholder: '🐢',
      type: 'animal'
    },
    {
      id: 20,
      name: 'Gizmo',
      breed: 'Leopard Gecko',
      age: '8 months',
      sex: 'Female',
      length: 'Up to 25cm',
      temperature: '28-32°C',
      diet: 'Insectivore',
      price: 'Negotiable',
      hiddenPrice: 15000,
      description: 'Friendly and low-maintenance gecko',
      personality: ['Gentle', 'Nocturnal', 'Hardy'],
      vaccinated: false,
      trained: false,
      imagePlaceholder: '🦎',
      type: 'animal'
    }
  ],
  'Small Animals': [
    {
      id: 21,
      name: 'Nibbles',
      breed: 'Syrian Hamster',
      age: '3 months',
      sex: 'Female',
      furType: 'Short',
      size: 'Up to 15cm',
      weight: 'Up to 150g',
      price: 'Negotiable',
      hiddenPrice: 2500,
      description: 'Cute and cuddly hamster',
      personality: ['Playful', 'Nocturnal', 'Friendly'],
      vaccinated: false,
      trained: false,
      imagePlaceholder: '🐹',
      type: 'animal'
    },
    {
      id: 22,
      name: 'Cocoa',
      breed: 'Guinea Pig',
      age: '6 months',
      sex: 'Male',
      furType: 'Short',
      size: 'Up to 25cm',
      weight: 'Up to 1.2kg',
      price: 'Negotiable',
      hiddenPrice: 5000,
      description: 'Social and vocal pet',
      personality: ['Social', 'Vocal', 'Gentle'],
      vaccinated: false,
      trained: false,
      imagePlaceholder: '🐭',
      type: 'animal'
    },
    {
      id: 23,
      name: 'Thumper',
      breed: 'Holland Lop Rabbit',
      age: '4 months',
      sex: 'Male',
      furType: 'Medium',
      size: 'Up to 35cm',
      weight: 'Up to 1.8kg',
      price: 'Negotiable',
      hiddenPrice: 7500,
      description: 'Adorable floppy-eared bunny',
      personality: ['Gentle', 'Curious', 'Social'],
      vaccinated: true,
      trained: true,
      imagePlaceholder: '🐰',
      type: 'animal'
    },
    {
      id: 24,
      name: 'Fluffy',
      breed: 'Chinchilla',
      age: '1 year',
      sex: 'Female',
      furType: 'Dense and soft',
      size: 'Up to 30cm',
      weight: 'Up to 800g',
      price: 'Negotiable',
      hiddenPrice: 10000,
      description: 'Soft and playful exotic pet',
      personality: ['Active', 'Social', 'Energetic'],
      vaccinated: false,
      trained: false,
      imagePlaceholder: '🐭',
      type: 'animal'
    }
  ]
};

// ============ PRODUCTS BY CATEGORY ============
export const productsByPet = {
  Dogs: [
    {
      id: 1,
      name: 'Premium Dog Food',
      price: '৳3,200',
      description: 'Nutritious food for healthy dogs',
      image: dogFoodImg,
      category: 'Food',
      inStock: true,
      rating: 5
    },
    {
      id: 2,
      name: 'Chew Toy Set',
      price: '৳1,200',
      description: 'Durable and fun toy collection',
      image: dogToyImg,
      category: 'Toys',
      inStock: true,
      rating: 5
    },
    {
      id: 3,
      name: 'Dog Leash & Collar',
      price: '৳1,800',
      description: 'Comfortable and durable set',
      image: null,
      category: 'Accessories',
      inStock: true,
      rating: 4
    },
    {
      id: 4,
      name: 'Orthopedic Dog Bed',
      price: '৳6,500',
      description: 'Memory foam comfort bed',
      image: null,
      category: 'Furniture',
      inStock: true,
      rating: 5
    }
  ],
  Cats: [
    {
      id: 5,
      name: 'Premium Cat Food',
      price: '৳2,800',
      description: 'Complete nutrition for cats',
      image: catFoodImg,
      category: 'Food',
      inStock: true,
      rating: 5
    },
    {
      id: 6,
      name: 'Cat Litter Premium',
      price: '৳1,500',
      description: 'Odor control clumping litter',
      image: catLitterImg,
      category: 'Hygiene',
      inStock: true,
      rating: 5
    },
    {
      id: 7,
      name: 'Cat Tree Tower',
      price: '৳9,500',
      description: 'Multi-level scratching post',
      image: null,
      category: 'Furniture',
      inStock: true,
      rating: 5
    },
    {
      id: 8,
      name: 'Interactive Toy Set',
      price: '৳950',
      description: 'Feathers, balls, and wands',
      image: null,
      category: 'Toys',
      inStock: true,
      rating: 4
    }
  ],
  Birds: [
    {
      id: 9,
      name: 'Deluxe Bird Cage',
      price: '৳12,500',
      description: 'Spacious and secure cage',
      image: null,
      category: 'Housing',
      inStock: true,
      rating: 5
    },
    {
      id: 10,
      name: 'Premium Seed Mix',
      price: '৳1,200',
      description: 'Nutritious blend for all birds',
      image: null,
      category: 'Food',
      inStock: true,
      rating: 5
    },
    {
      id: 11,
      name: 'Natural Wood Perches',
      price: '৳950',
      description: 'Various sizes for exercise',
      image: null,
      category: 'Accessories',
      inStock: true,
      rating: 4
    },
    {
      id: 12,
      name: 'Bird Bath Bowl',
      price: '৳1,600',
      description: 'Easy-clean bathing dish',
      image: null,
      category: 'Hygiene',
      inStock: true,
      rating: 4
    }
  ],
  Fish: [
    {
      id: 13,
      name: 'Aquarium Starter Kit',
      price: '৳15,000',
      description: '20 gallon complete setup',
      image: null,
      category: 'Housing',
      inStock: true,
      rating: 5
    },
    {
      id: 14,
      name: 'Premium Fish Food',
      price: '৳750',
      description: 'High-quality flake food',
      image: null,
      category: 'Food',
      inStock: true,
      rating: 5
    },
    {
      id: 15,
      name: 'Advanced Filter System',
      price: '৳3,800',
      description: 'Crystal clear water filtration',
      image: null,
      category: 'Equipment',
      inStock: true,
      rating: 5
    },
    {
      id: 16,
      name: 'Aquarium Decorations',
      price: '৳2,200',
      description: 'Plants and ornaments set',
      image: null,
      category: 'Accessories',
      inStock: true,
      rating: 4
    }
  ],
  Reptiles: [
    {
      id: 17,
      name: 'Reptile Food Mix',
      price: '৳1,500',
      description: 'Balanced nutrition for reptiles',
      image: reptFoodImg,
      category: 'Food',
      inStock: true,
      rating: 5
    },
    {
      id: 18,
      name: 'Terrarium Kit',
      price: '৳14,000',
      description: 'Complete habitat setup',
      image: null,
      category: 'Housing',
      inStock: true,
      rating: 5
    },
    {
      id: 19,
      name: 'Heat Lamp',
      price: '৳2,800',
      description: 'Temperature regulation',
      image: null,
      category: 'Equipment',
      inStock: true,
      rating: 5
    },
    {
      id: 20,
      name: 'Reptile Substrate',
      price: '৳1,200',
      description: 'Natural bedding material',
      image: null,
      category: 'Accessories',
      inStock: true,
      rating: 4
    }
  ],
  'Small Animals': [
    {
      id: 21,
      name: 'Small Animal Treats',
      price: '৳550',
      description: 'Healthy snacks variety pack',
      image: smallAnimalTreatsImg,
      category: 'Food',
      inStock: true,
      rating: 5
    },
    {
      id: 22,
      name: 'Cage Kit Deluxe',
      price: '৳6,200',
      description: 'Spacious multi-level cage',
      image: null,
      category: 'Housing',
      inStock: true,
      rating: 5
    },
    {
      id: 23,
      name: 'Exercise Wheel',
      price: '৳950',
      description: 'Silent spinner wheel',
      image: null,
      category: 'Toys',
      inStock: true,
      rating: 4
    },
    {
      id: 24,
      name: 'Bedding Material',
      price: '৳800',
      description: 'Soft absorbent bedding',
      image: null,
      category: 'Hygiene',
      inStock: true,
      rating: 5
    }
  ]
};

// ============ CARE GUIDES ============
export const careGuides = {
  Dogs: {
    feeding: {
      title: 'Feeding Your Dog',
      content: 'Proper nutrition is essential for your dog\'s health and happiness. Feed high-quality dog food appropriate for their age, size, and activity level.',
      tips: [
        'Feed adult dogs twice daily at consistent times',
        'Provide fresh water at all times',
        'Avoid feeding table scraps and toxic foods',
        'Adjust portions based on activity level and weight'
      ]
    },
    habitat: {
      title: 'Creating a Safe Home',
      content: 'Dogs need a safe, comfortable space to call their own. Provide a dedicated sleeping area and ensure your home is dog-proofed.',
      tips: [
        'Designate a comfortable sleeping area',
        'Remove toxic plants and chemicals',
        'Secure trash and hazardous materials',
        'Provide toys for mental stimulation'
      ]
    },
    health: {
      title: 'Health & Wellness',
      content: 'Regular veterinary care keeps your dog healthy. Schedule annual check-ups and stay current on vaccinations.',
      tips: [
        'Annual vet examinations',
        'Keep vaccinations up to date',
        'Monthly flea and tick prevention',
        'Regular dental care and teeth brushing'
      ]
    },
    grooming: {
      title: 'Grooming Essentials',
      content: 'Regular grooming keeps your dog clean, comfortable, and healthy. Grooming needs vary by breed.',
      tips: [
        'Brush coat weekly or daily for long-haired breeds',
        'Bathe monthly or as needed',
        'Trim nails every 2-4 weeks',
        'Clean ears regularly to prevent infections'
      ]
    }
  },
  Cats: {
    feeding: {
      title: 'Feeding Your Cat',
      content: 'Cats are obligate carnivores requiring a meat-based diet. Choose high-quality cat food and maintain consistent feeding times.',
      tips: [
        'Feed adult cats twice daily',
        'Always provide fresh, clean water',
        'Avoid overfeeding to prevent obesity',
        'Never feed toxic foods like onions or chocolate'
      ]
    },
    habitat: {
      title: 'Indoor Cat Environment',
      content: 'Create an enriching indoor environment with vertical spaces, hiding spots, and scratching posts.',
      tips: [
        'Provide scratching posts to protect furniture',
        'Create vertical climbing spaces',
        'Offer window perches for bird watching',
        'Set up multiple litter boxes in quiet locations'
      ]
    },
    health: {
      title: 'Health Care',
      content: 'Preventive care is key to a long, healthy life. Regular vet visits catch potential issues early.',
      tips: [
        'Annual wellness exams',
        'Keep vaccinations current',
        'Spay or neuter to prevent health issues',
        'Monitor for changes in behavior or appetite'
      ]
    },
    grooming: {
      title: 'Cat Grooming',
      content: 'While cats groom themselves, they still need your help. Regular brushing reduces hairballs and matting.',
      tips: [
        'Brush short-haired cats weekly',
        'Brush long-haired cats daily',
        'Trim nails every 2-3 weeks',
        'Check ears and teeth regularly'
      ]
    }
  },
  Birds: {
    feeding: {
      title: 'Feeding Your Bird',
      content: 'Birds need a varied diet of seeds, pellets, fruits, and vegetables for optimal health.',
      tips: [
        'Offer fresh food and water daily',
        'Provide variety: seeds, pellets, vegetables, fruits',
        'Remove uneaten fresh food after 2 hours',
        'Avoid avocado, chocolate, and salt'
      ]
    },
    habitat: {
      title: 'Cage Setup',
      content: 'Provide a spacious cage with room to fly and play. Place in a social area away from drafts.',
      tips: [
        'Choose largest cage possible for your bird',
        'Include multiple perches of varying sizes',
        'Provide toys for mental stimulation',
        'Place cage in living area but away from kitchen fumes'
      ]
    },
    health: {
      title: 'Bird Health',
      content: 'Regular vet check-ups and daily observation help keep your bird healthy and happy.',
      tips: [
        'Annual avian vet examinations',
        'Watch for changes in droppings or behavior',
        'Provide cuttlebone for calcium',
        'Ensure adequate sleep (10-12 hours)'
      ]
    },
    grooming: {
      title: 'Grooming & Care',
      content: 'Birds need regular nail and wing trims, plus bathing opportunities for healthy feathers.',
      tips: [
        'Offer daily bathing opportunities',
        'Trim nails when overgrown',
        'Consult vet for wing trimming',
        'Never use non-stick cookware near birds'
      ]
    }
  },
  Fish: {
    feeding: {
      title: 'Feeding Your Fish',
      content: 'Feed fish small amounts they can consume in 2-3 minutes. Overfeeding causes water quality issues.',
      tips: [
        'Feed once or twice daily',
        'Vary diet with flakes, pellets, and frozen foods',
        'Remove uneaten food after 5 minutes',
        'Fast fish one day per week'
      ]
    },
    habitat: {
      title: 'Aquarium Setup',
      content: 'A properly cycled tank with good filtration is essential for fish health and happiness.',
      tips: [
        'Cycle tank before adding fish',
        'Provide 1 gallon per inch of fish minimum',
        'Use appropriate filter for tank size',
        'Include hiding spots and decorations'
      ]
    },
    health: {
      title: 'Fish Health',
      content: 'Maintain stable water parameters and watch for signs of illness like unusual swimming or color changes.',
      tips: [
        'Test water parameters weekly',
        'Perform 25% water changes weekly',
        'Quarantine new fish for 2-4 weeks',
        'Watch for signs of disease or stress'
      ]
    },
    grooming: {
      title: 'Tank Maintenance',
      content: 'Regular tank maintenance keeps water clean and fish healthy. Establish a weekly routine.',
      tips: [
        'Weekly 25% water changes',
        'Clean algae from glass weekly',
        'Replace filter media monthly',
        'Vacuum gravel during water changes'
      ]
    }
  },
  Reptiles: {
    feeding: {
      title: 'Feeding Reptiles',
      content: 'Reptile diets vary by species. Research your specific pet\'s nutritional needs carefully.',
      tips: [
        'Feed appropriate diet for species',
        'Provide calcium and vitamin supplements',
        'Offer variety in diet when possible',
        'Remove uneaten live food after feeding'
      ]
    },
    habitat: {
      title: 'Terrarium Setup',
      content: 'Proper temperature, humidity, and lighting are critical for reptile health and wellbeing.',
      tips: [
        'Maintain species-appropriate temperature gradient',
        'Provide UVB lighting for most species',
        'Monitor humidity levels daily',
        'Create hiding spots for security'
      ]
    },
    health: {
      title: 'Reptile Health',
      content: 'Annual vet check-ups with an exotic animal veterinarian help prevent health issues.',
      tips: [
        'Find an exotic animal veterinarian',
        'Schedule annual wellness exams',
        'Watch for changes in eating or behavior',
        'Quarantine new reptiles for 90 days'
      ]
    },
    grooming: {
      title: 'Reptile Care',
      content: 'Regular habitat cleaning and monitoring help keep your reptile healthy and comfortable.',
      tips: [
        'Clean enclosure weekly',
        'Provide soaking dish for hydration',
        'Monitor shedding and assist if needed',
        'Maintain proper temperature and humidity'
      ]
    }
  },
  'Small Animals': {
    feeding: {
      title: 'Feeding Small Pets',
      content: 'Small animals need fresh hay, pellets, and vegetables daily. Diet varies by species.',
      tips: [
        'Provide unlimited fresh hay',
        'Offer measured pellets daily',
        'Include fresh vegetables',
        'Always provide fresh, clean water'
      ]
    },
    habitat: {
      title: 'Cage Setup',
      content: 'Spacious cages with proper bedding and enrichment keep small pets happy and healthy.',
      tips: [
        'Choose largest cage possible',
        'Use safe, absorbent bedding',
        'Provide hiding houses and tunnels',
        'Include exercise wheels for hamsters'
      ]
    },
    health: {
      title: 'Small Pet Health',
      content: 'Regular health checks and proper diet prevent common small pet health issues.',
      tips: [
        'Annual exotic vet check-ups',
        'Monitor teeth for overgrowth',
        'Watch for respiratory issues',
        'Handle gently and regularly'
      ]
    },
    grooming: {
      title: 'Grooming & Cleaning',
      content: 'Regular cage cleaning and grooming keep your small pet clean and comfortable.',
      tips: [
        'Spot clean cage daily',
        'Deep clean weekly',
        'Brush long-haired breeds regularly',
        'Trim nails as needed'
      ]
    }
  }
};

// ============ BREED INFORMATION ============
export const breedInfo = {
  Dogs: [
    {
      id: 1,
      name: 'Golden Retriever',
      characteristics: ['Friendly', 'Intelligent', 'Devoted'],
      size: 'Large (55-75 lbs)',
      temperament: 'Gentle and eager to please',
      lifespan: '10-12 years'
    },
    {
      id: 2,
      name: 'Labrador',
      characteristics: ['Outgoing', 'Even-tempered', 'Active'],
      size: 'Large (55-80 lbs)',
      temperament: 'Friendly and loyal',
      lifespan: '10-14 years'
    },
    {
      id: 3,
      name: 'German Shepherd',
      characteristics: ['Confident', 'Courageous', 'Smart'],
      size: 'Large (50-90 lbs)',
      temperament: 'Loyal and protective',
      lifespan: '9-13 years'
    },
    {
      id: 4,
      name: 'Poodle',
      characteristics: ['Intelligent', 'Active', 'Proud'],
      size: 'Varies by type',
      temperament: 'Friendly and trainable',
      lifespan: '12-15 years'
    }
  ],
  Cats: [
    {
      id: 5,
      name: 'Persian',
      characteristics: ['Gentle', 'Quiet', 'Sweet'],
      size: 'Medium (7-12 lbs)',
      temperament: 'Calm and affectionate',
      lifespan: '12-17 years'
    },
    {
      id: 6,
      name: 'Siamese',
      characteristics: ['Social', 'Vocal', 'Playful'],
      size: 'Medium (6-14 lbs)',
      temperament: 'Affectionate and talkative',
      lifespan: '15-20 years'
    },
    {
      id: 7,
      name: 'Maine Coon',
      characteristics: ['Gentle', 'Sociable', 'Intelligent'],
      size: 'Large (10-25 lbs)',
      temperament: 'Friendly gentle giant',
      lifespan: '12-15 years'
    },
    {
      id: 8,
      name: 'British Shorthair',
      characteristics: ['Easy-going', 'Calm', 'Independent'],
      size: 'Medium (9-18 lbs)',
      temperament: 'Laid-back and affectionate',
      lifespan: '12-17 years'
    }
  ],
  Birds: [
    {
      id: 9,
      name: 'Parakeet (Budgie)',
      characteristics: ['Playful', 'Social', 'Vocal'],
      size: 'Small (1 oz)',
      temperament: 'Friendly and active',
      lifespan: '5-10 years'
    },
    {
      id: 10,
      name: 'Cockatiel',
      characteristics: ['Affectionate', 'Gentle', 'Whistles'],
      size: 'Small (2-4 oz)',
      temperament: 'Sweet and friendly',
      lifespan: '15-20 years'
    },
    {
      id: 11,
      name: 'Lovebird',
      characteristics: ['Energetic', 'Playful', 'Social'],
      size: 'Small (1.5-2.5 oz)',
      temperament: 'Affectionate and active',
      lifespan: '10-15 years'
    },
    {
      id: 12,
      name: 'Canary',
      characteristics: ['Musical', 'Beautiful', 'Independent'],
      size: 'Small (0.5-1 oz)',
      temperament: 'Peaceful and melodious',
      lifespan: '10-15 years'
    }
  ],
  Fish: [
    {
      id: 13,
      name: 'Goldfish',
      characteristics: ['Hardy', 'Peaceful', 'Social'],
      size: 'Varies (2-14 inches)',
      temperament: 'Calm and easy-going',
      lifespan: '10-30 years'
    },
    {
      id: 14,
      name: 'Betta Fish',
      characteristics: ['Colorful', 'Territorial', 'Active'],
      size: 'Small (2.5-3 inches)',
      temperament: 'Aggressive to own kind',
      lifespan: '2-5 years'
    },
    {
      id: 15,
      name: 'Guppy',
      characteristics: ['Peaceful', 'Colorful', 'Active'],
      size: 'Small (1.5-2.5 inches)',
      temperament: 'Friendly and social',
      lifespan: '2-3 years'
    },
    {
      id: 16,
      name: 'Angelfish',
      characteristics: ['Graceful', 'Peaceful', 'Beautiful'],
      size: 'Medium (6 inches)',
      temperament: 'Semi-aggressive',
      lifespan: '10-12 years'
    }
  ],
  Reptiles: [
    {
      id: 17,
      name: 'Bearded Dragon',
      characteristics: ['Docile', 'Friendly', 'Hardy'],
      size: 'Medium (16-24 inches)',
      temperament: 'Calm and handleable',
      lifespan: '8-12 years'
    },
    {
      id: 18,
      name: 'Leopard Gecko',
      characteristics: ['Gentle', 'Easy-care', 'Nocturnal'],
      size: 'Small (8-11 inches)',
      temperament: 'Docile and friendly',
      lifespan: '10-20 years'
    },
    {
      id: 19,
      name: 'Ball Python',
      characteristics: ['Calm', 'Docile', 'Handleable'],
      size: 'Medium (3-5 feet)',
      temperament: 'Gentle and shy',
      lifespan: '20-30 years'
    },
    {
      id: 20,
      name: 'Red-Eared Slider',
      characteristics: ['Active', 'Aquatic', 'Long-lived'],
      size: 'Medium (5-12 inches)',
      temperament: 'Active and curious',
      lifespan: '20-40 years'
    }
  ],
  'Small Animals': [
    {
      id: 21,
      name: 'Syrian Hamster',
      characteristics: ['Solitary', 'Nocturnal', 'Friendly'],
      size: 'Small (5-7 inches)',
      temperament: 'Gentle when tame',
      lifespan: '2-3 years'
    },
    {
      id: 22,
      name: 'Guinea Pig',
      characteristics: ['Social', 'Vocal', 'Gentle'],
      size: 'Medium (8-10 inches)',
      temperament: 'Friendly and social',
      lifespan: '4-8 years'
    },
    {
      id: 23,
      name: 'Rabbit (Holland Lop)',
      characteristics: ['Gentle', 'Social', 'Playful'],
      size: 'Small-Medium (2-4 lbs)',
      temperament: 'Sweet and friendly',
      lifespan: '7-14 years'
    },
    {
      id: 24,
      name: 'Chinchilla',
      characteristics: ['Active', 'Social', 'Soft'],
      size: 'Medium (1-2 lbs)',
      temperament: 'Energetic and playful',
      lifespan: '10-20 years'
    }
  ]
};

// ============ TESTIMONIALS ============
export const testimonials = [
  {
    id: 1,
    name: 'Farah Rahman',
    petType: 'Dog',
    rating: 5,
    quote: 'Amazing service! Found the perfect golden retriever puppy for our family. The staff was knowledgeable and caring.',
    avatar: '👩'
  },
  {
    id: 2,
    name: 'Arif Hossain',
    petType: 'Cat',
    rating: 5,
    quote: 'Adopted a beautiful Persian cat. The store provided excellent guidance on care and nutrition. Highly recommend!',
    avatar: '👨'
  },
  {
    id: 3,
    name: 'Nadia Ahmed',
    petType: 'Bird',
    rating: 5,
    quote: 'Got a lovely parakeet and all the supplies I needed. The team helped me set up the perfect cage environment.',
    avatar: '👩‍🦱'
  },
  {
    id: 4,
    name: 'Kamrul Islam',
    petType: 'Fish',
    rating: 5,
    quote: 'Set up my first aquarium with their help. The fish are healthy and thriving. Great selection and advice!',
    avatar: '👨‍💼'
  }
];
