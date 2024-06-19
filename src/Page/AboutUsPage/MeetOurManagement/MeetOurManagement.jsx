import ManagementPerson from "./ManagementPerson/ManagementPerson";

const MeetOurManagement = () => {
  return (
    <section className="space-y-6 my-24 ">
      <h1 className="text-2xl font-semibold uppercase">Meet Our Management</h1>
      <p className="md:w-2/3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
        aliquam optio repudiandae aspernatur. Sunt tenetur eligendi corrupti
        facilis placeat eius?
      </p>
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* {
            data.map((item, index)  => <ManagementPerson key={index} item={item} />)
        } */}
        <ManagementPerson />
        <ManagementPerson />
        <ManagementPerson />
        <ManagementPerson />
      </article>
    </section>
  );
};

export default MeetOurManagement;
