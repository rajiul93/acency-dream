import ContactContent from "./ContactContent/ContactContent";

const ContactForm = () => {
  return (
    <div className="hero  min-h-[50vh] rounded-lg"  style={{backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/027/105/951/small/solid-black-background-for-studio-room-or-website-template-photo.jpg)'}}>
      <div className="hero-content flex-col md:flex-row md:flex-row-reverse gap-0">
        <div className="card md:rounded-l-none md:rounded-tr-[60px] shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body ">
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-2">
                Name
                <input type="text" className="grow"  />
              </label>
            </div>
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-2">
                Company
                <input type="text" className="grow"  />
              </label>
            </div>
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-2">
                Email
                <input type="text" className="grow"  />
              </label>
            </div>
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-2">
                Location
                <input type="text" className="grow"  />
              </label>
            </div>
           <span className="-mb-5 z-50 bg-white w-28 text-sm ms-4"> Your message</span>
            <textarea className="textarea textarea-bordered" placeholder="Enter Your message"></textarea>
            <div className="form-control mt-6">
              <button className="btn btn-info">Confirm</button>
            </div>
          </form>
        </div>
        <div className="text-center lg:text-left bg-info border md:p-8 text-base-100 rounded md:rounded-r-none mt-12 p-4 md:rounded-l-xl">
          <h1 className="text-3xl font-bold uppercase">Contact us</h1>
          <h2 className="uppercase text-sm">what happens next</h2>

          <ContactContent />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
