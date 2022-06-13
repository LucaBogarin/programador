var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', async (req, res, next) => {
  var nombre = req.body.nombre;
  var email = req.body.email;
  var telefono = req.body.telefono;
  var mensaje = req.body.mensaje;

  var obj = {
    to: 'lucabogarin2002@gmail.com',
    subject: 'CONTACTO WEB',
    html: nombre + "se contacto a traves de la web y quiere mas informacion a este correo" + email + ".<br> Ademas, hizo este comentario : " + mensaje + ".<br> Su telefono es: " + telefono
  }
  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth:{
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  }) ;
  var info=await transport.sendMail(obj);

  res.render('index',{
    Mensaje: 'Mensaje enviado correctamente'
  });
});

module.exports = router;
