module.exports = {
    async afterCreate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;

        // Check if the entry is a draft
        if (result.publishedAt === null) {
            return;
        }

        console.log("Send email");

        try{
            await strapi.plugins['email'].services.email.send({
              to: 'dennis_off@web.de',
              from: "dev.svhm@gmail.com", // e.g. single sender verification in SendGrid
              cc: '',
              bcc: "dev.svhm@gmail.com",
              replyTo: "dev.svhm@gmail.com",
              subject: 'The Strapi Email plugin worked successfully',
              text: '${fieldName}', // Replace with a valid field ID
              html: 'Hello world!', 
                
            })
        } catch(err) {
            console.log(err);
        }
    }
}