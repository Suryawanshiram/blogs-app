import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IappProps {
  data: {
    id: string;
    title: string;
    imageUrl: string;
    content: string;
    authorId: string;
    authorName: string;
    authorImageUrl: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

const BlogPostCard = ({ data }: IappProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bh-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
      <Link href={`/post/${data.id}`} className="block w-full h-full">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={data.imageUrl}
            fill
            alt="Image for blog post"
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {data.title}
          </h3>
          <p className="text-sm lg:text-base text-gray-600 mb-4 line-clamp-4">
            {data.content.replace(/\*\*/g, "")}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative size-8 overflow-hidden">
                <Image
                  src={
                    data?.authorImageUrl
                      ? data.authorImageUrl
                      : "https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?t=st=1741431194~exp=1741434794~hmac=962be723efe4001c627cf3ad0cb2531e07fdfff763fb1bcdd169f186f187535d&w=900"
                  }
                  alt={data?.authorName || "User"}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <p className="text-sm font-medium text-gray-700">
                {data.authorName}
              </p>
            </div>
            <time className="text-sm text-gray-700">
              {new Intl.DateTimeFormat("en-in", {
                year: "numeric",
                month: "short",
                day: "numeric",
              }).format(data.createdAt)}
            </time>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogPostCard;
