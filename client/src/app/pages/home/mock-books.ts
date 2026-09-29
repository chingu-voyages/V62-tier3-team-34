import { Book } from './book';

// Placeholder for the database. Delete once the books API exists.
export const MOCK_BOOKS: Book[] = [
  {
    title: 'Intricacies Of Modern Angular',
    author: 'Val Lysenko',
    description: 'The big ideas behind Angular with .NET applications',
    imageUrl: '/images/Val_Book.webp',
  },
];

export const MOCK_CURATED_BOOKS: Book[] = [
  {
    title: 'The Pragmatic Angular Programmer',
    author: 'Hala Madi',
    description: 'Your journey to mastery with me',
    imageUrl: '/images/hala_book.webp',
    rating: 4.8,
  },
  {
    title: 'Fundamentals Of Angular Software Architecture',
    author: 'Ruth Westnidge',
    description: 'A Modern 112 Part Crash Course',
    imageUrl: '/images/ruth_book.webp',
    rating: 4.9,
  },
  {
    title: 'Subtleties of Angular Design Patterns and Best Practices',
    author: 'Sumi Tharayil',
    description:
      'How I created scalable and adaptable applications that grow to meet evolving user needs',
    imageUrl: '/images/sumi_book.webp',
    rating: 4.8,
  },
  {
    title: 'Clean Angular Code',
    author: 'Ekaterina Kushnir',
    description: 'Principles and Patterns for Angular Craftsmanship',
    imageUrl: '/images/katia_book.jpg',
    rating: 4.7,
  },
  {
    title: 'Angular Code',
    author: 'Julker Nain',
    description: 'The Hidden Language of Computer Hardware and Software in Angular & .NET',
    imageUrl: '/images/nahul_book.webp',
    rating: 4.6,
  },
  {
    title: 'I Got Angular Up & Running',
    author: 'Rigo L.',
    description: 'Angular Step By Step',
    imageUrl: '/images/rigo_book.webp',
    rating: 4.5,
  },
  {
    title: 'Cracking Getting the Coding Interview',
    author: 'David Roberts',
    description: '189 Outreach Questions & Solutions',
    imageUrl: '/images/david_book.webp',
    rating: 4.7,
  },
];
