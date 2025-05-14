
import { useState, useEffect } from "react";
import { BlogCardSkeleton } from "@/components/BlogCardSkeleton";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/SectionHeading";
import { blogs, BlogPost } from "@/data/blog";
import { Link } from "react-router-dom";
import { ArrowRight, Upload } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const blogFormSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters" }),
  content: z.string().min(10, { message: "Content must be at least 10 characters" }),
  image: z.instanceof(FileList).refine(files => files.length > 0, { message: "Please select an image" }),
});

type BlogFormValues = z.infer<typeof blogFormSchema>;

export default function Blog() {
  const [loading, setLoading] = useState(true);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<BlogFormValues>({
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setBlogPosts(blogs);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: BlogFormValues) => {
    // Simulate form submission
    console.log("Form submitted:", data);
    
    toast({
      title: "Blog post created!",
      description: "Your blog post has been submitted successfully.",
    });
    
    // Reset form
    form.reset();
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <Tabs defaultValue="posts" className="w-full">
          <div className="flex items-center justify-between mb-8">
            <SectionHeading
              title="StepSmart Blog"
              subtitle="Insights and resources for your professional growth"
            />
            <TabsList>
              <TabsTrigger value="posts">All Posts</TabsTrigger>
              <TabsTrigger value="create">Create Post</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="posts" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loading
                ? Array(6)
                    .fill(0)
                    .map((_, i) => <BlogCardSkeleton key={i} />)
                : blogPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden flex flex-col">
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <div className="space-y-1">
                          <h3 className="text-xl font-semibold line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="text-muted-foreground line-clamp-3">
                          {post.excerpt}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" className="p-0 h-auto" asChild>
                          <Link to={`/blog/${post.id}`}>
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
            </div>
          </TabsContent>

          <TabsContent value="create">
            <Card>
              <CardHeader>
                <h3 className="text-2xl font-semibold">Create a New Blog Post</h3>
                <p className="text-muted-foreground">
                  Share your knowledge and insights with the StepSmart community
                </p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Blog Title</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter a title for your blog post"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="image"
                      render={({ field: { onChange, value, ...rest } }) => (
                        <FormItem>
                          <FormLabel>Cover Image</FormLabel>
                          <FormControl>
                            <div className="space-y-4">
                              <div className="flex flex-col items-center justify-center w-full border-2 border-dashed border-border rounded-lg p-6 cursor-pointer hover:bg-secondary/50 transition-colors">
                                <input
                                  type="file"
                                  id="image"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={(e) => {
                                    onChange(e.target.files);
                                    handleImageChange(e);
                                  }}
                                  {...rest}
                                />
                                <label
                                  htmlFor="image"
                                  className="flex flex-col items-center justify-center cursor-pointer w-full h-full"
                                >
                                  <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                                  <span className="font-medium">
                                    Click to upload an image
                                  </span>
                                  <span className="text-sm text-muted-foreground mt-1">
                                    PNG, JPG or WEBP (Max 3MB)
                                  </span>
                                </label>
                              </div>

                              {selectedImage && (
                                <div className="relative mt-2 w-full aspect-video rounded-lg overflow-hidden">
                                  <img
                                    src={selectedImage}
                                    alt="Preview"
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              )}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="content"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Blog Content</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Write your blog post here..."
                              rows={10}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg">
                      Publish Post
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
