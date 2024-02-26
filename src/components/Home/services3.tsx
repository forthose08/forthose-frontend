import Image from "next/image";

export default function Services3() {
  return (
    <div className="container mx-auto p-6 px-4">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:w-1/2 p-4">
          <Image
            src={require("../../utils/image/image3.webp")}
            alt="Image"
            className="w-full lg:w-1/2 flex justify-center m-auto h-auto rounded-lg"
          />
        </div>
        <div className="md:w-1/2 p-4">
          <h1 className="text-2xl py-2 md:py-0 md:text-3xl  font-bold">
            Why Choose Us
          </h1>
          <p className="text-sm md:text-lg py-2 md:py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            reprehenderit soluta pariatur laborum. Architecto tempore quia error
            nemo nesciunt mollitia asperiores porro inventore veniam sunt soluta
            quam quis quod omnis assumenda molestiae perferendis repellendus
            dolore, animi impedit veritatis eius, illo facilis. Sed harum vitae
            non laudantium tempore, quam sapiente officiis.
          </p>
          <p className="text-lg hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            reprehenderit soluta pariatur laborum. Architecto tempore quia error
            nemo nesciunt mollitia asperiores porro inventore veniam sunt soluta
            quam quis quod omnis assumenda molestiae perferendis repellendus
            dolore, animi impedit veritatis eius, illo facilis. Sed harum vitae
            non laudantium tempore, quam sapiente officiis.
          </p>
        </div>
      </div>
    </div>
  );
}
