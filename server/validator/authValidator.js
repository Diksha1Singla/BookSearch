const {z} = require("zod");

const signupSchema = z.object({
    username: z
    .string({required_error:"Name redquired"})
    .trim()
    .min(3, { message: "Username must be at least"}),
    
    email: z
    .string({required_error:"Email redquired"})
    .trim()
    .email({message:"Invalid email"})
    .regex(/^[a-zA-Z0-9._%+-]+@thapar\.edu$/, { 
        message: "Email must be a @thapar.edu address" }),

    password: z
    .string({required_error:"Password redquired"})
    .min(5, { message:"Password must be AtLeast 5 digit"})
    .max(255, { message:"Password must be AtMost 255 digit"}),

    RollNo: z
    .string({required_error:"RollNo redquired"})
    .trim()
})

module.exports = signupSchema