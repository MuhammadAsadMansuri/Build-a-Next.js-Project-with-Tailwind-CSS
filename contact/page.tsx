import { resolve } from "path";

export default async function Contact() {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  })

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Contact Us</h1>
    </div>
  );
}