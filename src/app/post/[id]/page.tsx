import { prisma } from "@/app/utils/db";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getData(id: string) {
  const data = await prisma.blogPost.findUnique({
    where: {
      id,
    },
  });
  if (!data) return notFound();
  return data;
}

type Params = Promise<{ id: string }>;

const SingleBlog = async ({ params }: { params: Params }) => {
  const { id } = await params;
  const data = await getData(id);
  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <Link
        href="/dashboard"
        className={buttonVariants({ variant: "outline" })}
      >
        back to Posts
      </Link>

      <div className="flex flex-col gap-4 mb-8 mt-6 border p-4 rounded-md">
        <h1 className="text-3xl font-bold tracking-tight mb-4">{data.title}</h1>
        <div className="flex items-center space-x-4">
          <div className="relative size-10 rounded-full overflow-hidden">
            <Image
              src={data.authorImageUrl}
              alt={data.authorName}
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm font-medium text-gray-700">{data.authorName}</p>
          <p className="text-sm lg:text-base text-gray-600 mb-4 line-clamp-4 pt-4">
            {new Intl.DateTimeFormat("en-in", {
              year: "numeric",
              month: "short",
              day: "numeric",
            }).format(data.createdAt)}
          </p>
        </div>
        <div className="p-2 lg:py-4 relative w-full h-[400px] mb-8 overflow-hidden rounded-lg">
          <Image
            src={data.imageUrl}
            alt={data.title}
            fill
            priority
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <p
          className="text-base text-gray-700 leading-relaxed px-4 md:px-8"
          dangerouslySetInnerHTML={{
            __html: data?.content.replace(/\n/g, "<br />"),
          }}
        ></p>
      </div>
    </div>
  );
};

export default SingleBlog;
