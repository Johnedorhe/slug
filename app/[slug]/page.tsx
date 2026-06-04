const CATEGORIES: Record<string, {name: string, description: string, size: string[], colour: string[]}> =  {
   tops: {name: 't-shirts', description: 'Bluberry T-shirt', size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], colour: ['red', 'black', 'white']},
   trousers: {name: 'jeans', description: 'Stock Jeans', size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], colour: ['red', 'black', 'white']},
   socks: {name: 'socks', description: 'Cotton Socks', size: [ 'S', 'M', 'L', 'XL'], colour: ['red', 'black', 'white']},
   corperate: {name: "Men's Suits", description: "Men's corperate suit", size: [ 'M', 'L', 'XL', 'XXL'], colour: ['blue', 'black', 'white']},
}

interface SlugProps {
  params: Promise<{slug: string}>
}

const Slug = async ({params}: SlugProps) => {
  const {slug} = await params
  const category = CATEGORIES[slug]
  
  // Guard clause to handle invalid slugs gracefully
  if (!category) {
    return <div>Category not found</div>
  }
  
  return (
    <div>
      <h1>{category.name}</h1>
      <p>{category.description}</p>
      
      {/* Size Dropdown */}
      <select name="size" id="size">
        {category.size.map(sz => (
          <option value={sz} key={sz}>{sz}</option>
        ))}
      </select>
      
      {/* Colour Dropdown */}
      <select name="colour" id="colour">
        {category.colour.map(col => (
          <option value={col} key={col}>{col}</option>
        ))}
      </select>
    </div>
  )
}

export default Slug
