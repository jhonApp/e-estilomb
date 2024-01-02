const { Usuario } = require('../models/users');

async function authenticateUser(Respose, Email, Password) {
    const user = await Usuario.findOne({ where: { Email: Email } });
    if (!user) {
      return null; 
    }
  
    const match = await bcrypt.compare(Password, user.Password);
    if (!match) {
      return null;
    }
  
    return user;
}

module.exports = { authenticateUser };
