import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "../utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import BlogPostCard from "@/components/molecules/BlogPostCard";

async function getData(userId: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await prisma?.blogPost?.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

const DashboardRoute = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const data = await getData(user?.id);

  return (
    <div>
      <div className="p-4 flex items-center justify-between mb-4">
        <h2 className="flex font-medium">Your Blog Articles</h2>

        <Link href="/dashboard/create" className={buttonVariants()}>
          Create Post
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <BlogPostCard data={item} key={item?.id} />
        ))}
      </div>
    </div>
  );
};

export default DashboardRoute;
