import React from "react";
import Navbar from "../../components/Navbar/Navbar";
const BlogCard = ({ title, image, content, link }) => (
  <div className="bg-white shadow-md rounded-md overflow-hidden mb-6">
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{content}</p>
      <a
        href={link}
        className="text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more
      </a>
    </div>
  </div>
);
const Blogs = () => {
  const blogData = [
    {
      title: "Exploring Different Coffee Beans",
      image: "coffee_image_1.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      link: "#",
    },
    {
      title: "The Art of Brewing",
      image: "coffee_image_2.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      link: "#",
    },
    // Add more data as needed
  ];
  return (
    <>
      <Navbar></Navbar>
      <section>
        <div className="font-sans bg-gray-100">
          <header className="bg-gray-800 text-white text-center py-4">
            <h1 className="text-3xl font-semibold">Coffee Blog</h1>
          </header>

          <main className="container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogData.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </main>
        </div>
      </section>
    </>
  );
};

export default Blogs;
