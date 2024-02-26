import Image from "next/image";
import React from "react";

const blogsData = [
  {
    id: 1,
    title: "RBI's Rules For Gold Loan Repayment When The Borrower Passes Away",
    content:
      "Gold loans are quite popular because they usually have lower interest rates compared to other loans where you put something valuable as security. This is because people use gold as a guarantee, and gold is very valuable. The companies that give out gold loans follow similar rules to other loan companies. But there is a problem when someone who took a loan dies suddenly. ",
    image: require("../../../../public/blog/blog1.png"),
  },
  {
    id: 2,
    title: "पर्सनल लोन चाहिए तो ज़रूर करें ये काम, तभी मिल पायेगा बेहतर सौदा.",
    image: require("../../../../public/blog/blog2.png"),
    content:
      "Today, finding yourself in a financial crisis is not unusual. Whether Medical emergencies or pink slips, sudden transfers and relocations, sky-rocketing charges of higher education – the list is endless. Even if there is no crisis, there are often situations where you wished you had more cash than was available in your savings account",
  },
  {
    id: 3,
    title: "Blog 2",
    content: "This is the content of Blog 2.",
    image: require("../../../../public/blog/blog2.jpeg"),
  },
  {
    id: 4,
    title: "Meta Quest 3 with Snapdragon XR2 Gen 2 Platform announced",
    content:
      "Meta has introduced the Meta Quest 3, a new Mixed Reality headset for everyday use. This headset offers unique experiences, like playing a virtual piano on your table or creating portals to other worlds in your living room. It maintains a clear view of your surroundings using high-quality Passthrough technology, with more pixels than the previous Meta Quest 2. Continue reading",
    image: require("../../../../public/blog/blog4.jpg"),
  },
];

export default function Blog() {
  return (
    <div className="pt-36 pb-20">
      <div className="text-center font-bold text-4xl">Top Blogs</div>
      <div className="container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10  ">
        {blogsData.map((blog) => (
          <div className="bg-white rounded p-4 shadow-md border-2">
            <div className="mb-4 border-2">
              <Image
                src={blog.image}
                alt={blog.title}
                className="w-full h-[13rem] lg:h-[25rem] "
              />
            </div>
            <div className="border-2 p-2 border-t-0">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="mt-2 text-gray-600">{blog.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
