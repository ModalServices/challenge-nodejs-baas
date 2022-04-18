import bcryptjs from 'bcryptjs'

class Utils {
  public HashPassword (pass: string): string {
    return bcryptjs.hashSync(pass, 8)
  }
}

export default new Utils()
