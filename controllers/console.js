//Para que path sea path
const path = require("path");

exports.getPagina = (req,res) => {
    res.sendFile(path.join(__dirname,'..','views','info.html'))
}

exports.postValidacion = (req,res) => {
    isTriangleRectangle(res,req.body.angle1,req.body.angle2,req.body.angle3)
}


function isTriangleRectangle(res, angle1, angle2, angle3) {
    if (((parseInt(angle1) + parseInt(angle2) + parseInt(angle3)) == 180) && (angle1 == 90 || angle2 == 90 || angle3 == 90)) {
        res.json({
            trianguloRect: "positivo"
        })
    } else {
        res.json({
            trianguloRect: "negativo"
        })
    }
}

