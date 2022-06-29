const Footer = () => {
    return(
        <div className="bg-title h-560 flex flex-row justify-evenly mt-52">
            <div className="flex flex-col justify-center gap-3">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2333.6539360911947!2d51.42115365281302!3d35.79134063995327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0672751b1753%3A0xed4d880692ab6ad3!2sMelal%20Boutique%20Mall!5e0!3m2!1sen!2s!4v1656420340809!5m2!1sen!2s"
                    className="rounded-md h-338 w-440" 
                ></iframe>
                <p className="text-white font-normal text-lg text-center">4th floor , Melal Boutique Mall
                    <br/> Bosnia and Herzegovina St , Fereshte Ave , Tehran
                </p>
            </div>

        </div>
    );
}
export default Footer;