"use client";

import page from "@/app/auth/page.module.css";
import { Field, Form, Input } from "@base-ui/react";
import { AtSignIcon, LockIcon } from "lucide-react";

export default function Auth() {
    return (
        <Form className={page.form}>
            <Field.Root name="username" className={page.fieldset}>
                <Field.Label className={page.label}>Username</Field.Label>
                <Field.Control
                    type="text"
                    placeholder="Enter your username"
                    render={(props) => {
                        return (
                            <div className={page.field}>
                                <AtSignIcon className={page.icon} />
                                <Input {...props} />
                            </div>
                        );
                    }}
                />
            </Field.Root>
            <Field.Root name="password" className={page.fieldset}>
                <Field.Label className={page.label}>Password</Field.Label>
                <Field.Control
                    type="password"
                    placeholder="Enter your password"
                    render={(props) => {
                        return (
                            <div className={page.field}>
                                <LockIcon className={page.icon} />
                                <Input {...props} />
                            </div>
                        );
                    }}
                />
            </Field.Root>
        </Form>
    );
}
