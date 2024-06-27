import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";

export default function success()
{
    return(
        <div className="h-screen">
            <div className="mt-32 md:max-w-[50vw] mx-auto">
            <CheckCheck className="text-gray-600  w-16 h-16 mx-auto my-16"/>
            <div className="text-center">
                <h3 className="md:text-2xl text-base text-gray-900 font-semibold">Payment Done</h3>
                <p className="text-gray-600">Thank you for your Purchase We hope you enjoy</p>
                <p>Have a great day</p>
                <Button asChild>
                    <Link href={'/'} className="mt-5">
                    Go back
                    </Link>
                </Button>
            </div>
            </div>
        </div>
    )
}