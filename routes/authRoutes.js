const express = require('express');
const router = express.Router();
const { register, login, me } = require('../controllers/authController');
const verificarToken = require('../middlewares/authMiddleware');
const Usuario = require('../models/usuarioModel')

router.post('/register', register);
router.post('/login', login);
router.get('/me', verificarToken, async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.usuario.id_usuario, {
      attributes: { exclude: ['password_hash'] }
    });

    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    res.json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener el perfil del usuario' });
  }
});

module.exports = router;
