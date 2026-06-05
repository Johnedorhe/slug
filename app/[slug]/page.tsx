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

  return (
    <div className="pt-4 flex flex-col items-center gap-4 bg-zinc-700 min-h-screen">
      <h1 className="font-bold capitalize text-lg">{category.name}</h1>
      <p>{category.description}</p>
      <div>
        <label htmlFor="colour">colour:</label>
        <select name="colour" id="colour">
        {category.colour.map(cl => (
          <option className="bg-amber-800" key={cl} value="colour">{cl}</option>
        ))}
        </select>
        </div>
      <div>
        <label htmlFor="size">size:</label>
        <select name="size" id="size">
        {category.size.map(sz => (
          <option className="bg-amber-800" key={sz} value="colour">{sz}</option>
        ))}
        </select>
        </div>
    </div>
  )
}

export default Slug