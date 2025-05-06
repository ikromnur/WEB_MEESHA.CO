"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useUpdateSearchParams } from "@/hooks/use-search-params";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const filters = {
  category: [
    { id: "bouquet", label: "Bouquet" },
    { id: "simple-bouquet", label: "Simple Bouquet" },
    { id: "cake-flower", label: "Cake Flower" },
    { id: "cup-flower", label: "Cup Flower" },
  ],
  type: [
    { id: "fresh-flower", label: "Fresh Flower" },
    { id: "artificial-flower", label: "Artificial Flower" },
  ],
  style: [
    { id: "classic", label: "Classic" },
    { id: "luxury", label: "Luxury" },
    { id: "modern", label: "Modern" },
    { id: "pastel", label: "Pastel" },
  ],
  untuk: [
    { id: "anniversary", label: "Anniversary" },
    { id: "wedding", label: "Wedding" },
    { id: "graduation", label: "Graduation" },
    { id: "pacar", label: "Pacar" },
  ],
  color: [
    { id: "pink", label: "Pink" },
    { id: "blue", label: "Blue" },
    { id: "purple", label: "Ungu" },
    { id: "red", label: "Merah" },
  ],
} as const;

const FormSchema = z.object({
  search: z.string().optional(),
  category: z.array(z.string()).optional(),
  type: z.array(z.string()).optional(),
  style: z.array(z.string()).optional(),
  untuk: z.array(z.string()).optional(),
  color: z.array(z.string()).optional(),
});

export function ProductFilterForm() {
  const { params, updateParams } = useUpdateSearchParams();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      search: typeof params.search === "string" ? params.search : "",
      category:
        typeof params.category === "string" ? params.category.split(",") : [],
      type: typeof params.type === "string" ? params.type.split(",") : [],
      style: typeof params.style === "string" ? params.style.split(",") : [],
      untuk: typeof params.for === "string" ? params.for.split(",") : [],
      color: typeof params.color === "string" ? params.color.split(",") : [],
    },
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    updateParams({
      search: values.search || null,
      category: values.category?.length ? values.category.join(",") : null,
      type: values.type?.length ? values.type.join(",") : null,
      style: values.style?.length ? values.style.join(",") : null,
      for: values.untuk?.length ? values.untuk.join(",") : null,
      color: values.color?.length ? values.color.join(",") : null,
    });
  };

  const handleReset = () => {
    form.reset({
      search: "",
      category: [],
      type: [],
      style: [],
      untuk: [],
      color: [],
    });
    updateParams({
      search: null,
      category: null,
      type: null,
      style: null,
      for: null,
      color: null,
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="flex items-center gap-3">
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input placeholder="Search Bouquet..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Cari</Button>
        </div>
        <h2 className="text-lg font-semibold text-foreground">Filter</h2>
        <Separator />

        {Object.entries(filters).map(([key, options]) => (
          <FormField
            key={key}
            control={form.control}
            name={key as keyof z.infer<typeof FormSchema>}
            render={() => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel className="capitalize">{key}</FormLabel>
                <div className="grid grid-cols-2 gap-2">
                  {options.map((option) => (
                    <FormField
                      key={option.id}
                      control={form.control}
                      name={key as keyof z.infer<typeof FormSchema>}
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              className="border-border"
                              checked={field.value?.includes(option.id)}
                              onCheckedChange={(checked) => {
                                const currentValue = Array.isArray(field.value)
                                  ? field.value
                                  : [];

                                const newValue = checked
                                  ? [...currentValue, option.id]
                                  : currentValue.filter(
                                      (v: string) => v !== option.id
                                    );

                                field.onChange(newValue);
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {option.label}
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
                <Separator />
              </FormItem>
            )}
          />
        ))}

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            type="button"
            className="w-full"
            onClick={handleReset}
          >
            Reset
          </Button>
          <Button type="submit" className="w-full">
            Apply
          </Button>
        </div>
      </form>
    </Form>
  );
}
