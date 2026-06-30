class TestDataGenerator{
    static generateEmail(){
        return `user${Date.now()}@gmail.com`    // Template Literal
    }

    
}

console.log(
    TestDataGenerator.generateEmail()
)

const email = TestDataGenerator.generateEmail();

const orderId = `ORD2026${Date.now()}`

console.log(orderId)

// await page.fill('#email', email)


