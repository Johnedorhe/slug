export const metadata = {
  title: 'Slug Example',
  description: 'This is an example of a page with a slug in the URL.',
}

const CATEGORY: Record<string, { name: string, description: string, items: string[] }> = {
  example1: {
    name: 'Example 1',
    description: 'This is the first example category.',
    items: ['Item 1', 'Item 2', 'Item 3'],
  },
  example2: {
    name: 'Example 2',
    description: 'This is the second example category.',
    items: ['Item 4', 'Item 5', 'Item 6'],
  }, 
    example3: {
    name: 'Example 3',
    description: 'This is the third example category.',
    items: ['Item 7', 'Item 8', 'Item 9'],
    },
    example4: {
    name: 'Example 4',
    description: 'This is the fourth example category.',
    items: ['Item 10', 'Item 11', 'Item 12'],
    },
}

interface SlugProps {
    params: Promise<{ slug: string }>
}

const Slug = async ({ params }: SlugProps) => {
  const { slug } = await params;
  const category = CATEGORY[slug];

  if (!category) {
    return <div>Category not found!</div>;
  }

  return (
    <div>
      <h1>{category.name}</h1>
      <p>{category.description}</p>
      <ul>
        {category.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Slug
