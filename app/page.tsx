import Link from 'next/link'

export const metadata = {
  title: 'Slug Example',
  description: 'This is an example of a page with a slug in the URL.',
}


const Homepage = () => {
  return (
    <div>
      <div>
        <Link href="/example1">Example 1</Link>
        <Link href="/example2">Example 2</Link>
        <Link href="/example3">Example 3</Link>
        <Link href="/example4">Example 4</Link>
      </div>

     <p>This is a test page to demonstrate dynamic routing in Next.js. The URL of this page is determined by the slug parameter in the file name. You can access this page by navigating to /slug/[your-slug] in your browser, where [your-slug] is the value you want to use for the slug. For example, if you navigate to /slug/test, you will see this page with the slug value of &apos;test&apos;.</p>
    </div>
  )
}

export default Homepage
