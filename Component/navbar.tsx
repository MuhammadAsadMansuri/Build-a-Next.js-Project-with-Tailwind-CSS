import Link from "next/link"
export default function Navbar() {
    return (
        <div className="bg-gray-800 text-white font-bold">
            <ul className="container mx-auto flex items-right justify-between p-10">
            <Link href ="/home" className="hover:text-gray-300">Home</Link>
            <Link href="/product" className="hover:text-gray-300">Product</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
            <Link href="/about" className="hover:text-gray-300">About</Link>
            <Link href="/about/management" className="hover:text-gray-300">Management</Link>
            </ul>
        </div>
    )
}