const {z} = require("zod");

const LocationSchema = z.object({
    LocationName:z
    .string({required_error:"LocationName Required"})
    .trim(),
    
    BlockDetails:z
    .string({required_error:"LocationName Required"})
    .trim(),

    DetailedAddress:z
    .string()
    .trim()
    
})

module.exports = LocationSchema