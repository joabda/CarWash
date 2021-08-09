export interface ContactUsJSON {
    button:string,
    caption: string,
    emailError: string,
    error: string,
    errorSending: string
    fields: {
        name: string,
        email: string,
        phone: string,
        subject: string,
        message: string
    },
    reasons: {
        choose: string,
        feedback: string
    },
    thanks: string,
    title: string
}