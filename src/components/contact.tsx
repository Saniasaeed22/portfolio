export default function Contact() {
    return (
        <section id="contact" className="container bg-black text-white font-medium max-auto py-10 px-4 max-w-screen-2xl">
            <div>
                <h1 className="text-3xl font-bold p-4">Contact Me</h1>
              <form>
                <div className="flex justify center flex-col gap-8 p-4 px-14">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <input type="text" placeholder="Name" className="w-full border
                         border-pink-700 px-4 py-2 rounded-md focus:outline-none
                          hover:bg-pink-300 focus:ring-2 inputStyle required:"/>
                        
                        <input type="text" placeholder="Email@" className="w-full border
                         border-pink-700 px-4 py-2 rounded-md focus:outline-none
                          hover:bg-pink-300 focus:ring-2 inputStyle required:"/>

                    </div>
                    <input type="text" placeholder="subject"className="w-full border
                         border-pink-700 px-4 py-2 rounded-md focus:outline-none
                          hover:bg-pink-300 focus:ring-2 inputStyle required:"/>

                    <textarea rows={6} placeholder="Message"className="w-full border
                         border-pink-700 px-4 py-2 rounded-md focus:outline-none
                          hover:bg-pink-300 focus:ring-2 inputStyle required:"></textarea>
                    <div className="flex justify-center">
                        <button type="submit"className="bg-pink-700 rounded-md py-2 px-2 hover:bg-pink-300 hover:text-black">Send Message</button>
                    </div>

                </div>
              </form>
            </div>
         </section>
    );}