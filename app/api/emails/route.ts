import { Resend } from 'resend';
import Welcome from '@/emails/Welcome';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { email, firstName } = await request.json();
        await resend.emails.send({
            from: 'mark@lupleg.org',
            to: email,
            subject: 'hello world',
            react: Welcome({ firstName }),
        });
        return new Response('Email sent successfully', { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response('Failed to send email', { status: 500 });
    }
}