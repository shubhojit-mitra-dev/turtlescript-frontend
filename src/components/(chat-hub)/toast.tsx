import { toast as useToast } from "@/components/ui/use-toast"

type ToastProps = {
  title: string;
  description?: string;
  variant?: "default" | "destructive";
}

export const toast = ({ title, description, variant = "default" }: ToastProps) => {
  useToast({
    title,
    description,
    variant,
  })
}

