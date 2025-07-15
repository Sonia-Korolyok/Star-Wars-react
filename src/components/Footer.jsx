const Footer = () => {
    return (
        <footer className="py-6 ps-8 rounded-t-3xl bg-grey-color flex flex-row ">
            <div className="bg-red-color border-black border-2 rounded-t-md rounded-b-md px-3 py-3 ps-5 ms-12 cursor-pointer hover:bg-red-500 hover:text-white col-sm-2 offset-sm-2"
                 onClick={() => alert('Not yet implemented!')}>Send me an <span
                className="text-gray-900 uppercase hover:text-black">Email</span></div>
        </footer>
    );
};

export default Footer;