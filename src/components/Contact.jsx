import React from "react";

const Contact = () => {
    return (
        <div id='contact' className="max-w-[1040px] m-auto md:pl-20 p-4 py-">
            <h1 className="py-4 text-4xl font-bold text-center text-[#olive]">
                Contact Form
            </h1>
            <form 
                action="https://getform.io/f/2407d200-23d2-4fc6-a938-027e42c00b42" 
                method="POST" 
                encType="multipart/form-data"
            >
                <div className="grid md:grid=+-cols gap-4 w-full py-2">
                    <div className="flex flex-col">
                        <label className="text-sm py-2">Name</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="name" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm py-2">Phone Number</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="phone" />
                    </div>
                </div>
            <div className="flex flex-col -py-2">
                <label className="text-sm py-2">Email</label>
                <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" name="email" />
            </div>
            <div className="flex flex-col -py-2">
                <label className="text-sm py-2">Subject</label>
                <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="subject" />
            </div>
            <div className="flex flex-col py-2">
                <label className="text-sm py-2">Message</label>
                <textarea className="border-2 rounded-lg p-3 border-gray-300" rows="10" type="email" name="message"></textarea>
            </div>
            <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
                Submit
            </button>
            </form>
        </div>
    )

}

export default Contact;