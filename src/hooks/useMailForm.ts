import { formSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

export const useMailForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      subject: "",
      email: "",
      content: "",
    }
  });

  const onSubmit = useCallback((values: any) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { form, onSubmit };
};