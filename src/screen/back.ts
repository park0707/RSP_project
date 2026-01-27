import { useRouter } from "@tanstack/react-router";
export function back()
{
    const router = useRouter();
    const goBack = ()=>{
        router.history.back();
    };
    return goBack;
}