export default class Client {
      id: string
      name: string
      email: string
      phone: number
      company: string
      instagram: string
      data: boolean


    constructor(name: string, email: string, phone: number, company: string, instagram: string, data: boolean, id: string = null) {
        this.name = name
        this.email = email
        this.phone = phone
        this.company = company
        this.instagram = instagram
        this.data = data
        this.id = id
    }
}