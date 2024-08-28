"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { MultiSelect } from "@/components/multi-select";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const fieldsList = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "astro1",
    label: "Astro1",
  },
  {
    value: "astro2",
    label: "Astro2",
  },
  {
    value: "astro3",
    label: "Astro3",
  },
  {
    value: "astro4",
    label: "Astro4",
  },
  {
    value: "astro5",
    label: "Astro5",
  },
  {
    value: "astro6",
    label: "Astro6",
  },
  {
    value: "astro7",
    label: "Astro7",
  },
  {
    value: "astro8",
    label: "Astro8",
  },
  {
    value: "astro9",
    label: "Astro9",
  },
  {
    value: "astro10",
    label: "Astro10",
  },
  {
    value: "astro11",
    label: "Astro11",
  },
];

const FormSchema = z.object({
  frameworks: z
    .array(z.string().min(1))
    .min(1)
    .nonempty("Please select at least one field."),
});

export default function Home() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      frameworks: ["next.js", "nuxt.js"],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast(
      `You have selected following frameworks: ${data.frameworks.join(", ")}.`
    );
  }

  return (
    <main className="flex min-h-screen:calc(100vh - 3rem) flex-col items-center justify-start space-y-3 p-3">
      <PageHeader>
        {/* <PageHeaderHeading>Customer Catalog</PageHeaderHeading> */}
        {/* <PageHeaderDescription>assembled with shadcn/ui</PageHeaderDescription> */}
        {/* <PageActions>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/sersavan/shadcn-multi-select-component"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </PageActions> */}
      </PageHeader>
      <Card className="w-full max-w-xl p-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="frameworks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fields</FormLabel>
                  <FormControl>
                    <MultiSelect
                      options={fieldsList}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      placeholder="Select options"
                      variant="inverted"
                      animation={2}
                      maxCount={3}
                    />
                  </FormControl>
                  <FormDescription>
                    Choose the fields you are interested in.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant="default" type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </Card>
    </main>
  );
}
