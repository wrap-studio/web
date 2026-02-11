import layout from "@/app/auth/layout.module.css";
import { Building2Icon } from "lucide-react";

export default function AuthLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className={layout.viewport + " background"}>
            <div className={layout.card}>
                <div className={layout.header}>
                    <div className={layout.icon}>
                        <Building2Icon />
                    </div>
                    <div className={layout.title}>Wrap Studio</div>
                    <div className={layout.description}>
                        Enter the account details linked to the organization.
                    </div>
                </div>
                <div className={layout.content}>{children}</div>
            </div>
        </div>
    );
}
