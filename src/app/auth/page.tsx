"use client";

import sendForm from "@/app/auth/lib/sendForm";
import page from "@/app/auth/page.module.css";
import { Button, Field, Form, Input } from "@base-ui/react";
import {
    AtSignIcon,
    ChevronRightIcon,
    LoaderCircleIcon,
    LockIcon,
} from "lucide-react";
import { useState } from "react";

export default function Auth() {
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    return (
        <Form
            className={page.form}
            errors={errors}
            onFormSubmit={async (values) => {
                setErrors({});
                setLoading(true);
                const response = await sendForm(values);
                setErrors(response.errors);
                setLoading(false);
            }}
        >
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
                <Field.Error className={page.error} />
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
                <Field.Error className={page.error} />
            </Field.Root>
            <Button
                type="submit"
                disabled={loading}
                focusableWhenDisabled
                data-invalid={Object.keys(errors).length > 0 ? "" : undefined}
                className={page.button}
            >
                {loading ? (
                    <LoaderCircleIcon className={page.loader} />
                ) : (
                    <>
                        Continue
                        <ChevronRightIcon />
                    </>
                )}
            </Button>
        </Form>
    );
}
