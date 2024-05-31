import { supabase } from "@/service/db";

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        const { error } = await supabase
            .from('queries')
            .insert({ name, email, message });

        if (error) {
            console.log(error.message)
            return new Response(
                JSON.stringify({ status: "error", message: error.message }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        return new Response(
            JSON.stringify({ status: "success" }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );

    } catch (err) {
        return new Response(
            JSON.stringify({ status: "error", message: "Invalid request" }),
            { status: 400, headers: { "Content-Type": "application/json" } }
        );
    }
}
