import { handleSubmit } from "@/actions/blogs";
import SubmitButton from "@/components/atoms/SubmitButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const CreateBlogRoute = () => {
  return (
    <Card className="flex w-full max-w-lg mx-auto py-4">
      <CardHeader>
        <CardTitle>Create Post</CardTitle>
        <CardDescription>
          Create an share the Post with worlds with your blog
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-3" action={handleSubmit}>
          <div className="flex flex-col gap-2 py-2">
            <Label>Title</Label>
            <Input name="title" required type="text" placeholder="Title" />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Content</Label>
            <Textarea
              name="content"
              required
              placeholder="Add your content here"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Image URL</Label>
            <Input name="url" required type="url" placeholder="Image URL" />
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateBlogRoute;
