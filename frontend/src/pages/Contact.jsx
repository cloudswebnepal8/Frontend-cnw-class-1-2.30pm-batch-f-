import { useState } from "react"
function Contact() {
  const [formdata, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""

  })

  const [success, setSuccess] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value

    });
    setSuccess("")
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("Contact : ", JSON.stringify(formdata))

    setSuccess("Message sent successfully")

    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "" 

    })
  }

  return (
    <div className="flex flex-col gap-4 min-h-screen justify-center items-center">
      <h1 className="text-green-500 font-bold pt-10 lg:text-2xl">Contact Us</h1>
      <form className="flex flex-col gap-6 border border-gray-300 px-15 py-12" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your Full Name'

          name="fullName"
          value={formdata.fullName}
          onChange={handleChange}

          className="w-full border border-gray-300 px-8 py-2" required />

        <input type="email" placeholder="Enter your email"
          name="email"
          value={formdata.email}
          onChange={handleChange}


          className="w-full border border-gray-300 px-8 py-2" required />

        <input type="text" placeholder="Subject"
          name="subject"
          value={formdata.subject}
          onChange={handleChange}


          className="w-full border border-gray-300 px-8 py-2" required />

        <textarea placeholder="Your Message"
          name="message"
          value={formdata.message}
          onChange={handleChange}

          className="w-full border border-gray-300 px-6 py-2" required></textarea>

        <button type="submit" className="bg-green-500 text-white font-semibold py-2 hover:scale-105 duration-500">Send Message</button>
      </form>

      {
        success && (
          <p>{success}</p>
        )
      }
    </div>
  )
}

export default Contact


//localstorage

//hooks-usestate-state management


