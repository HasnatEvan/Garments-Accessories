const GoogleMap = () => {
    return (
        <div className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[600px]">
            <iframe
                title="Front Line BD Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d732.3005637016412!2d91.81198731310079!3d22.332289186427023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd9b453bda365%3A0xd4cf5aad2bacfce3!2sHero%20MotoCorp%20Bike%20Meuseum%20-%20MotorCycle%20Showroom!5e0!3m2!1sen!2sbd!4v1751543712378!5m2!1sen!2sbd"
                className="w-full h-full"
                allowFullScreen=""
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default GoogleMap;
