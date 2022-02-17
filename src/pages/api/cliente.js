export default function Clientes(request, response) {
    if (request.method == 'POST') {
        var fs = require("fs");
        var sampleObject = { name: request.body.name, email: request.body.email, phone: request.body.phone, company: request.body.company, instagram: request.body.instagram, data: request.body.data };

        fs.appendFile("clientes.json", JSON.stringify(request.body) + "\n", (err) => {
            if (err)
                response.status(500).json({
                    err
                })
          });

        response.status(200).send()
    }
}