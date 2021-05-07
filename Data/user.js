import bcrypt from "bcryptjs";
const users = [
    { name:"Admin User",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456",12),
      isAdmin: true
    },
    { name:"john Doe",
      email: "john@gmail.com",
      password: bcrypt.hashSync("123456",12),
    },
    { name:"jane Doe",
      email: "jane@gmail.com",
      password: bcrypt.hashSync("123456",12),
    }
]

export default users;