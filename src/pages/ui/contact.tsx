import Input from "@/ui/input";

const Contact = () => {
    return (
        <section className="text-center px-32 w-full">

            <div className="bg-white p-4 w-full rounded-2xl text-start flex gap-4 my-10 drop-shadow-blue">

                <div className="p-8 bg-[#edf0f7] rounded-xl">
                    <p className="text-xl font-semibold text-blue-600 mb-2">Contact</p>
                    <h2 className="text-2xl font-semibold">Get In Touch With Me</h2>
                    <p className="text-lg">
                        Let{"'"}s connect and turn ideas into reality! Whether you have questions, 
                        need support, or want to collaborate on something amazing, 
                        I{"'"}m just a message away. Don{"'"}t hesitate—reach out now and lets make great things happen together!
                    </p>
                </div>

                <div className="p-2 rounded-xl backdrop-blur-xl">
                    <form >
                        <Input placeholder="Your Name" type="text" disabled={false} label={""} />
                    </form>
                </div>
            </div>
        </section>
    )
};

export default Contact;