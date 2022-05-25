export default function Clientes(request, response) {
    if (request.method == 'POST') {
        var fs = require("fs");
        
        var row = request.body.name+";"+request.body.email+";"+request.body.phone+";"+request.body.company+";"+request.body.instagram+";"+request.body.type.value+";"+request.body.data

        fs.appendFile("clientes.csv", row + "\n", (err) => {
            if (err)
                response.status(500).json({
                    err
                })
          });

        response.status(200).send()
    }
}