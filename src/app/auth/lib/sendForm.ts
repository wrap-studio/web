import { Form } from "@base-ui/react";
import { z } from "zod";

const schema = z.object({
    username: z.string().min(3, "Username must contain at least 3 characters."),
    password: z.string().min(8, "Password must contain at least 8 characters."),
});

export default async function sendForm(values: Form.Values) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const result = schema.safeParse(values);

    if (!result.success) {
        const { fieldErrors } = z.flattenError(result.error);
        return { success: false, errors: fieldErrors };
    }

    return { success: true, errors: {} };
}
